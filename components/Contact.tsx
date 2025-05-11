'use client'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
  return (
    <footer id="contact" className="relative max-w-full px-4 md:px-8 lg:px-20 mt-7 md:mt-16 overflow-hidden">
      <div className="w-full absolute h-full">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full"
        />
      </div>

      <div className="flex relative z-20">
        <h1 className="heading lg:max-w-[35vw] text-3xl sm:text-5xl font-bold">
          Connect me to take <span className="text-primary">your</span> ideas
           to the next level
        </h1>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center my-5 relative z-20">

    <div className="flex w-full">
      <div className="flex space-x-4">
        <button aria-label='Whatsapp'
          className="hover:text-primary cursor-pointer transition duration-300"
          onClick={() => {
            window.open(`https://wa.me/+917560845014`, '_blank');
          }}
        >
          <FaWhatsapp size={32} />
        </button>
        <button aria-label='Email'
          className="hover:text-primary cursor-pointer transition duration-300"
          onClick={() => {
            window.open(`mailto:dev@nizamudheen.com`, '_blank');
          }}
        >
          <FaEnvelope size={32} />
        </button>
        <button aria-label='Linkedin'
          className="hover:text-primary cursor-pointer transition duration-300"
          onClick={() => {
            window.open('https://www.linkedin.com/in/muhammednizamudheen', '_blank');
          }}
        >
          <FaLinkedin size={32} />
        </button>
        <button aria-label='Github'
          className="hover:text-primary cursor-pointer transition duration-300"
          onClick={() => {
            window.open('https://github.com/novus318', '_blank');
          }}
        >
          <FaGithub size={32} />
        </button>
        <button aria-label='Instagram'
          className="hover:text-primary cursor-pointer transition duration-300"
          onClick={() => {
            window.open(
              'https://instagram.com/n_i_zam___?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
              '_blank'
            );
          }}
        >
          <FaInstagram size={32} />
        </button>
      </div>
    </div>
    </div>
  </footer>
  )
}

export default Contact