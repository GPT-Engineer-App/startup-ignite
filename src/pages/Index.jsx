import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Header */}
      <header className="flex justify-between items-center py-6 px-4 border-b">
        <div className="text-2xl font-bold">SaaS Startup</div>
        <nav className="space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <Button variant="primary">Sign Up</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="text-center py-20 bg-gray-100">
        <h1 className="text-5xl font-bold mb-4">Welcome to SaaS Startup</h1>
        <p className="text-xl mb-8">Revolutionizing the way you manage your business.</p>
        <Button variant="primary" size="lg">Get Started</Button>
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px] mt-8" />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-16 h-16 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Feature One</h3>
            <p>Brief description of feature one.</p>
          </div>
          <div className="text-center">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-16 h-16 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Feature Two</h3>
            <p>Brief description of feature two.</p>
          </div>
          <div className="text-center">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-16 h-16 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Feature Three</h3>
            <p>Brief description of feature three.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center border p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Basic</h3>
            <p className="text-4xl font-bold mb-4">$10/month</p>
            <ul className="mb-6 space-y-2">
              <li>Feature A</li>
              <li>Feature B</li>
              <li>Feature C</li>
            </ul>
            <Button variant="primary">Sign Up</Button>
          </div>
          <div className="text-center border p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Standard</h3>
            <p className="text-4xl font-bold mb-4">$20/month</p>
            <ul className="mb-6 space-y-2">
              <li>Feature A</li>
              <li>Feature B</li>
              <li>Feature C</li>
            </ul>
            <Button variant="primary">Sign Up</Button>
          </div>
          <div className="text-center border p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Premium</h3>
            <p className="text-4xl font-bold mb-4">$30/month</p>
            <ul className="mb-6 space-y-2">
              <li>Feature A</li>
              <li>Feature B</li>
              <li>Feature C</li>
            </ul>
            <Button variant="primary">Sign Up</Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        <p className="text-center max-w-2xl mx-auto mb-8">We are a team of passionate individuals dedicated to providing the best SaaS solutions for your business.</p>
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <Input placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input placeholder="Subject" />
          <Textarea placeholder="Message" />
          <Button variant="primary" type="submit">Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 border-t text-center">
        <div className="space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;