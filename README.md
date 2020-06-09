# [unit4.io](https://unit4.io)

## Run

```bash
$ cd /mnt/c/_projects/designunit4
$ npm run dev
```

## Convert gif to video

```sh
ffmpeg -i <filename>.gif -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p <filename>.mp4
ffmpeg -i <filename>.gif -c vp9 -b:v 0 -crf 41 <filename>.webm
```
