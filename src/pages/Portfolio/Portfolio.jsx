import Header from '../../components/Header/Header'
import image from '../../assets/projeto.svg'

function Portfolio () {
    return (
        <Header 
          image={image} 
          description="ilustracao mulher mexendo no computador"
        >
            Meus Projetos 
        </Header>    
    )
}

export default Portfolio