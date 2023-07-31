import PersonPhoto from '../../../assets/images/start-photo.png'

const Avatar = () => {
    return (
        <div className='start__img'>
            <img src={PersonPhoto} alt="avatar" className="start__avatar" />
        </div>
    )
}

export default Avatar