import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@/compo/ui/button";

const Footer = () => {
    return (
        <footer className="w-full bg-background text-foreground py-16 min-h-[300px] flex flex-col justify-between">
  <div className="max-w-screen-xl mx-auto px-6 md:px-12">
    
    {/* Top Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
      
      {/* Brand Section */}
      <div>
        <h2 className="text-2xl font-bold">YourSaaS</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Empowering businesses with cutting-edge solutions.
        </p>
        <div className="flex justify-center md:justify-start space-x-4 mt-4">
          <Link href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-primary">
            <FaTwitter size={24} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary">
            <FaLinkedin size={24} />
          </Link>
          <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-primary">
            <FaGithub size={24} />
          </Link>
        </div>
      </div>

      {/* Navigation Links */}
      <div>
        <h3 className="text-lg font-semibold">Company</h3>
        <ul className="mt-3 space-y-3">
          <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
          <li><Link href="/features" className="text-muted-foreground hover:text-primary">Features</Link></li>
          <li><Link href="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
          <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
        </ul>
      </div>

      {/* Newsletter Subscription */}
      <div>
        <h3 className="text-lg font-semibold">Stay Updated</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Subscribe to our newsletter for the latest updates.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-3 text-sm border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <Button className="mt-3 sm:mt-0 sm:ml-2">Subscribe</Button>
        </div>
      </div>

    </div>

    {/* Bottom Section */}
    <div className="mt-16 border-t border-border pt-8 text-center text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} YourSaaS. All rights reserved.</p>
    </div>

  </div>
</footer>

    );
};

export default Footer;
