import footerLogo from '../Assests/Images/footerLogo.png'
export default function Footer(){
  return (
    <footer class='flex flex-col gap-[1rem] items-center p-[2rem] bg-slate-100'>
      <div>
        <img src={footerLogo} alt="footer logo image" />
      </div>
      <p className='text-slate-600 w-[25rem] text-center'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.
      </p>
      <ul class='flex gap-[2rem] text-slate-600'>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">History</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
      <div class='flex gap-[2rem] text-[2rem] text-slate-600'>
      <i className="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-github"></i>
      <i class="fa-brands fa-dribbble"></i>
      </div>
    </footer>
  );
}