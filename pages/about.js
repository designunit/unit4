import react from 'react'
import DefaultLayout from '../components/DefaultLayout';
import Title from '../components/Title';
import TextBlock from '../components/TextBlock';

export default () => (
    <DefaultLayout>
        <Title>О НАС</Title>

        <TextBlock>
            Организацией пространства в Tilda Лера занималась сама – и это заведомо был вызов: площадь помещения здесь всего 80 кв.м. «Мы хотели место французского формата, а там все маленькое и компактное, все сидят практически друг с другом». Таким оно и получилось, но сталкивалась Шулюмова и со стереотипами: «В Европе ресторан – это про атмосферу, они готовы к новым блюдам и сочетаниям. А в Москве это история про тусовку. Мы до сих пор слышим, что у вас все хорошо, но это же полуподвал».
        </TextBlock>
    </DefaultLayout>
)