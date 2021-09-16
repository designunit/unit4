#!/bin/env python3.9
import requests as rq
import json
import os

from tqdm import tqdm


PATHS_URL = "https://unit.tmshv.com/unit-4-pages/paths"
CONTENT_PAGE_URL = "https://unit.tmshv.com/unit-4-pages?slug="


def save_dir_init(directory):
    if not os.path.exists(directory):
        os.makedirs(directory)


def get_all_pages(json_list):
    return [i.get('slug') for i in json_list]


def save_mdx_files(slug_filename, json_data, lang_flag=False):
    save_dir_init("data")
    json_contents = json_data[0]

    excerpt = json_contents.get("excerpt")

    title_key = "title"
    text_key = "text"
    filename = f"./data/{slug_filename}.ru.mdx"

    if lang_flag:
        title_key += "_en"
        text_key += "_en"
        filename = f"./data/{slug_filename}.en.mdx"

    with open(filename, "w") as f:
        f.write(f"---\ncover: {slug_filename}\nexcerpt: {excerpt}\n---\n\n")
        f.write(f"# {json_contents.get(title_key)}\n\n")

        for component in json_contents.get("content"):
            if component.get("__component") == "unit-4.text":
                f.write(f"{component.get(text_key)}\n\n")

            if component.get("__component") == "unit-4.image":
                f.write(f"<Image src=\"{component.get('image').get('url')}\" alt=\"{component.get('image').get('alternativeText')}\" />\n\n")

            if component.get("__component") == "unit-4.carousel":
                f.write(f"<Carousel effect={component.get('switchType')}>\n")
                for carousel_photo in component.get('media'):
                    f.write(f"\t<Image src=\"{carousel_photo.get('url')}\" alt=\"{carousel_photo.get('alternativeText')}\" />\n")
                f.write(f"</Carousel>\n\n")


def main():
    paths = rq.get(PATHS_URL).json()
    all_pages = get_all_pages(paths)

    for page in tqdm(all_pages):
        slug_filename = page.replace("/", "")
        json_page_data = json.loads(rq.get(f"{CONTENT_PAGE_URL}{page}").text)
        save_mdx_files(slug_filename, json_page_data)
        save_mdx_files(slug_filename, json_page_data, True)


if __name__ == "__main__":
    main()
