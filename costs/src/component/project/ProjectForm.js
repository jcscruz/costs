import { useEffect, useState } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForme.module.css'

function ProjectForm({btnText}) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5100/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'Application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])
    
    return (
        <form className={styles.form}>
            <Input type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do projeto"></Input>
            <Input type="number" text="Orçamento do Projeto" name="budget" placeholder="Insira o orçamento total"></Input>
                <Select name="category_id" text="Selecione uma categoria" options={categories}></Select>
                <SubmitButton text={btnText}></SubmitButton>
        </form>
    )
}

export default ProjectForm