import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForme.module.css'

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do projeto"></Input>
            <Input type="number" text="Oreçamento do Projeto" name="budget" placeholder="Insira o orçamento total"></Input>
                <Select name="category_id" text="Selecione uma categoria"></Select>
                <SubmitButton text={btnText}></SubmitButton>
        </form>
    )
}

export default ProjectForm