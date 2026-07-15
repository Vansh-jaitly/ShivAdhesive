import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'wouter'
import { products, type Product } from '@/data/products'
import { Check } from 'lucide-react'

const Products = () => {
  return (
    <div className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-4">
            Our Products
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Comprehensive range of adhesive solutions for packaging, corrugation, and industrial applications
          </p>
        </motion.div>

        <div className="space-y-12">
          {products.map((product: Product, index: number) => (
            <motion.div
              key={product.id}
              id={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="scroll-mt-20"
            >
              <Card className="overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row">
                  {/* Product Image */}
                  <div className="lg:w-1/3 relative min-h-[250px] lg:min-h-[350px] bg-muted/10 overflow-hidden flex items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-border/40">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-[300px] w-auto max-w-full object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  {/* Product Details */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <CardTitle className="text-2xl font-bold font-heading mb-2">{product.name}</CardTitle>
                          <CardDescription className="text-base text-muted-foreground">
                            {product.description}
                          </CardDescription>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {product.badges.map((badge: string) => (
                            <Badge key={badge} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none font-medium">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-border/60">
                        {/* Key Features */}
                        <div>
                          <h3 className="text-sm font-heading font-semibold uppercase tracking-wider text-foreground mb-3">
                            Key Features
                          </h3>
                          <ul className="space-y-2">
                            {product.features.map((feature: string) => (
                              <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Applications */}
                        <div>
                          <h3 className="text-sm font-heading font-semibold uppercase tracking-wider text-foreground mb-3">
                            Applications
                          </h3>
                          <ul className="space-y-2">
                            {product.applications.map((application: string) => (
                              <li key={application} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>{application}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Packaging */}
                        <div>
                          <h3 className="text-sm font-heading font-semibold uppercase tracking-wider text-foreground mb-3">
                            Packaging Sizes
                          </h3>
                          <ul className="space-y-2">
                            {product.packaging.map((size: string) => (
                              <li key={size} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>{size}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-primary text-primary-foreground border-primary">
            <CardContent className="py-12 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-tight mb-4">
                Looking for Custom Adhesive Formulations?
              </h2>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Our team can develop tailored adhesive solutions to meet your specific manufacturing requirements and industry standards.
              </p>
              <Button variant="outline" size="lg" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Products
