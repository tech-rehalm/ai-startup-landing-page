
import Logo from "@/assets/logo.svg"
import X from "@/assets/social-x.svg"
import Insta from "@/assets/social-instagram.svg"
import Yout from "@/assets/social-youtube.svg"

export const Footer = () => {
  return <footer className="py-5 border-t border-white/15">
    <div className="container">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center ">
          <div className="flex gap-2 items-center lg:flex-1">
          <Logo className="w-6 h-6"/>
          <h2 className="font-medium">AI startup Landing Page</h2>
        </div>

          <nav className="flex flex-col gap-5 lg:flex-row lg:flex-1 lg:justify-center ">
            <a href="" className="text-white/70 transition hover:text-white text-xs md:text-sm">Features</a>
            <a href="" className="text-white/70 transition hover:text-white text-xs md:text-sm">Developers</a>
            <a href="" className="text-white/70 transition hover:text-white text-xs md:text-sm">Company</a>
            <a href="" className="text-white/70 transition hover:text-white text-xs md:text-sm">Blog</a>
            <a href="" className="text-white/70 transition hover:text-white text-xs md:text-sm">Changelog</a>
          </nav>

        <div className="flex gap-5 text-white/40 py-2 lg:flex-1 lg:justify-end">
          <X className="transition hover:text-white"/>
          <Insta className="transition hover:text-white"/>
          <Yout className="transition hover:text-white"/>
        </div>
      </div>
      
    </div>
  </footer>;
};
