import './contact.css'

const Contact = () => {
  return (
    <section className='contact'>
      <div className='content'>
        <h2 id="contact__title">Contact Me</h2>
        <p id="contact__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit neque eget aliquam luctus. Morbi interdum metus.</p>
        <button className='contact__button'>
          Contact
        </button>
      </div>
      <div className='big__circle' />
    </section>
  )
}

export default Contact