import { CloudinaryInput } from '@app/common/components/cloudinary-input/cloudinary-input.component';
import { Create, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const MenuCreate = () => {
    return (
        <Create title='Додати елемент меню'>
            <SimpleForm>
                <TextInput source="title" fullWidth label="Назва"/>
                <CloudinaryInput source="image" label="Фото" />
                <TextInput source="descriptions" fullWidth label="Опис"/>
                <NumberInput source="price" label="Ціна в грн."/>
                <NumberInput source="weight" label="Вага в гр."/>
            </SimpleForm>
        </Create>
    )
};