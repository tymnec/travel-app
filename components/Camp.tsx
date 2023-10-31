interface CampProps {
    backgroundImage: string
    title: string
    subtitle: string
    peopleJoined: string
}

const CampSite = ({backgroundImage, title, subtitle, peopleJoined}: CampProps) => {
    return ( 
        <div>
            
        </div>
    )
}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollar flex h-[340px] w-full items-start justify-start overflow-x-scroll gap-8 lg:h-[400px] xl:h-[640px]">
        <CampSite backgroundImage="bg-bg-img-1"
        title="Putuk Truno Camp"
        subtitle="Putuk Truno Camp"
        peopleJoined="50+ joined"
      </div>
    </section>
  );
};

export default Camp;
