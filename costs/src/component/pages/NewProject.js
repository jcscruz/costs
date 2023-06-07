import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
import { useNavigate } from 'react-router'


function NewProject() {

    const navigate = useNavigate()

    function createPost(project){
        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5100/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            navigate('/projects', {message: 'Projeto criado com sucesso!'})
            //redirect
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto depois de adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"></ProjectForm>
        </div>
    )
}

export default NewProject