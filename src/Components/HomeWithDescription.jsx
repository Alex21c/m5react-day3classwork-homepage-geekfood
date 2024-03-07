import kindOfVilla from "./../Assests/Images/kindOfVilla.png";

export default function HomeWithDescription(){
  return (
    <section className='flex ml-[20rem] m-[7rem] p-[5rem] bg-slate-100 gap-[5rem] items-center'>

        <img className='rounded-md translate-x-[-20rem] object-cover w-[50rem] h-[50rem] ' src={kindOfVilla} alt="Big beautiful house" />
        
        <div className='  translate-x-[-20rem] flex flex-col gap-[1rem]'>
          <h2 className='font-bold text-[1.8rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
          <p className='text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
          <a href="#" className="max-w-[10rem] text-center font-normal text-white bg-blue-600 hover:bg-blue-700 pl-[1rem] pr-[1rem]  p-[.5rem] rounded-md">Get in Touch</a>
        </div>
        
    </section>
  );
}