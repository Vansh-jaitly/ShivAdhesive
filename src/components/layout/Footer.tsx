import { Link } from 'wouter'
import { Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-heading font-bold uppercase tracking-tight mb-4">
              Shiv Adhesive
            </h3>
            <p className="text-sm text-muted">
              Engineering the strongest bonds for over 35 years. Trusted by leading manufacturers in packaging and corrugation industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-semibold uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted hover:text-foreground transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-sm font-heading font-semibold uppercase tracking-wide mb-4">
              Products
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products#pasting-gum" className="text-sm text-muted hover:text-foreground transition-colors">
                  Pasting Gum Powder
                </Link>
              </li>
              <li>
                <Link href="/products#corrugation-gum" className="text-sm text-muted hover:text-foreground transition-colors">
                  Corrugation Gum Powder
                </Link>
              </li>
              <li>
                <Link href="/products#yellow-dextrin" className="text-sm text-muted hover:text-foreground transition-colors">
                  Yellow Dextrin
                </Link>
              </li>
              <li>
                <Link href="/products#food-grade" className="text-sm text-muted hover:text-foreground transition-colors">
                  Food-Grade Gum Powders
                </Link>
              </li>
              <li>
                <Link href="/products#liquid-gum" className="text-sm text-muted hover:text-foreground transition-colors">
                  Liquid Gum
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-heading font-semibold uppercase tracking-wide mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-muted flex-shrink-0" />
                <span className="text-sm text-muted">
                Plot No. 544, Sector 8 <br />
                IMT Manesar, Gurugram <br />
                Haryana – 122050, India <br />
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted flex-shrink-0" />
                <a href="tel:+919650577925" className="text-sm text-muted hover:text-foreground transition-colors">
                +91 96505 77925
                <br />
                +91 98110 68397
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted flex-shrink-0" />
                <a href="mailto:shivadhesive@gmail.com" className="text-sm text-muted hover:text-foreground transition-colors">
                shivadhesive@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted text-center">
            © {new Date().getFullYear()} Shiv Adhesive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
