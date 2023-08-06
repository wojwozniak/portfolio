type ProjectCardProps = {
    title: string,
    description: string,
    image: string,
    link: string,
    githubLink: string
}

const RenderProjectCard = (props: ProjectCardProps) => {
    return (
        <div className='projects__card'>
            <div className='projects__card__image'>
                <img src={props.image} alt='project' />
                <h1 className='projects__card__title'>{props.title}</h1>
            </div>
        </div>
    )
}

export default RenderProjectCard