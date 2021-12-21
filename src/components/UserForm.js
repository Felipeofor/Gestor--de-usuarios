import Button from './Button';
import Input from './Input';
import useFormulario from '../hooks/useFormulario';

const UserForm = ( { submit }) => {
    const [formulario, handleChange, reset] = useFormulario({ 
        name: '' , 
        lastName: '', 
        email: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(formulario);
        reset();
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <Input 
            name="name"
            type="text"
            placeholder="Nombre"
            value={formulario.name}
            onChange={handleChange}
        />
        <Input 
            name="lastName"
            type="text"
            placeholder="Apellido"
            value={formulario.lastName}
            onChange={handleChange}
        />
        <Input 
            name="email"
            type="email"
            placeholder="Email"
            value={formulario.email}
            onChange={handleChange}
        />
        <Button
            type="submit"
        >
            Enviar
        </Button>
        </form>
    )
    }


export default UserForm;