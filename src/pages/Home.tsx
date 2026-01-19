import { Link } from 'wouter'
import { motion } from 'framer-motion'
import { CheckCircle2, Award, Globe, Package, Printer, UtensilsCrossed, Box } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Home = () => {
  const strengths = [
    {
      icon: CheckCircle2,
      title: 'Quality Assurance',
      description: 'Backed by 25+ years of experience, every batch is produced under strict quality control to ensure consistent bonding strength and reliable performance.',
    },
    {
      icon: Award,
      title: 'Custom Formulations',
      description: 'Application-specific adhesive solutions developed to meet machine requirements, substrates, and industry standards.',
    },
    {
      icon: Globe,
      title: 'Pan-India Supply',
      description: 'A dependable supply network enabling timely delivery across India and export markets, with support for bulk and repeat orders.',
    },
  ]

  const industries = [
    {
      icon: Package,
      name: 'Packaging & Corrugation',
      description: 'Specialized adhesives for box manufacturing and corrugated board production.',
    },
    {
      icon: Printer,
      name: 'Printing & Offset',
      description: 'High-performance pasting solutions for paper and print applications.',
    },
    {
      icon: UtensilsCrossed,
      name: 'Food & Pharma Packaging',
      description: 'Food-grade certified adhesives meeting strict safety and regulatory standards.',
    },
    {
      icon: Box,
      name: 'Export Packaging',
      description: 'Export-quality formulations designed for international shipping requirements.',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-b from-muted/20 to-background">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-15" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-6">
            High-Performance Adhesive Solutions for Packaging & Corrugation Industry
            </h1>
            <h2 className="text-3xl text-muted mb-8 max-w-2xl mx-auto">
            Where Quality Meets Consistency
            </h2>
            <Button size="lg" asChild>
              <Link href="/products">Explore Products</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight mb-4">
              Why Choose Shiv Adhesive
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Built on decades of experience and commitment to quality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <strength.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{strength.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {strength.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight mb-4">
              Industries We Serve
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Trusted by manufacturers across diverse sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <industry.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                    <CardTitle className="text-lg">{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight mb-4">
                Trusted Manufacturing Excellence
              </h2>
              <p className="text-xl text-muted mb-8">
                25+ Years of Experience
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="default" className="text-sm py-2 px-4">
                ISO Certified
              </Badge>
              <Badge variant="default" className="text-sm py-2 px-4">
                Food Grade Certified
              </Badge>
              <Badge variant="default" className="text-sm py-2 px-4">
                Export Quality
              </Badge>
              <Badge variant="default" className="text-sm py-2 px-4">
                B2B Manufacturing
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
