import ExperienceBlock from "../ui/ExperienceBlock"

const Section03Experience = () => {
  return (
    <section id="about" className='w-screen bg-transparent z-2 relative pt-18'>
      <div className='bg-background pt-10 w-full h-auto flex flex-col pl-14 pr-14 pb-20'>
        <h2 className="text-4xl">
          About me
        </h2>
        <p className="font-light z-5 mt-5">
          aaa
        </p>
        <ExperienceBlock description="abcd" duration="2022-2023" role="role" technologies={["react", 'typescript']} title="title" />
      </div>
    </section>
  )
}

export default Section03Experience