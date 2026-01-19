import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Factory, Award, Users, Target } from 'lucide-react'

const About = () => {
  return (
    <div className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-6 text-center">
            About Shiv Adhesive
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted mb-6">
  Shiv Adhesive is a family-run adhesive manufacturing business with a legacy spanning over 25 years. Founded by <strong>Shri Mithan Laal</strong> in Delhi and later established in Gurugram, Haryana, the company has built a strong reputation in the packaging and corrugation industry.
            </p>
            <p className="text-lg text-muted mb-6">
              Over the years, Shiv Adhesive has evolved from a small-scale operation into a trusted supplier for packaging manufacturers, driven by a consistent focus on product quality, process reliability, and long-term customer relationships.
            </p>
            <p className="text-lg text-muted">
              Today, we supply a wide range of pasting and corrugation adhesive powders and liquid solutions, serving clients across India and select export markets while maintaining strict quality standards in every batch.
            </p>

          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-muted/20">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Target className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                To provide high-quality adhesive solutions that enable our customers to manufacture superior products. We are committed to continuous improvement, innovation, and maintaining the trust that our clients have placed in us for over two decades.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Award className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Quality First</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every batch undergoes rigorous quality control to ensure consistent performance and reliability. We never compromise on quality standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Users className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Customer Focus</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Building long-term relationships through reliable service, timely delivery, and responsive support. Your success is our success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Factory className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Manufacturing Excellence</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Continuous improvement in our manufacturing processes, adopting best practices, and investing in quality infrastructure.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Target className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Integrity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Honest business practices, transparent communication, and ethical conduct in all our dealings.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Manufacturing & Quality Process */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Manufacturing & Quality Process</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted">
            <p>
              Our IMT Manesar facility is equipped with modern machinery and standardized processes to ensure consistent quality and reliable production.
            </p>
            <p>
              Each batch follows strict raw material checks, controlled manufacturing, and quality testing for uniform performance.
            </p>
            <p>
              Food-grade and caustic-free products undergo additional safety and compliance checks to meet export and regulatory standards.
            </p>
          </div>
        </CardContent>
        </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default About
