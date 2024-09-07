import { Button } from "@/components/ui/button";
import GoogleMaps from "@/components/ui/GoogleMaps";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/layout/footer";
import { Header } from "@/layout/header";

export function ContactPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center gap-10">
      <Header />
      <div className="w-5/6 md:w-2/3 lg:w-1/2 bg-gray-100 rounded-lg py-20 flex justify-center items-center"></div>
      <div className="w-full bg-white py-8 flex justify-center">
        <div className="w-full max-w-3xl text-center px-4">
          <h1 className="text-2xl md:text-3xl font-bold">Get In Touch With Us</h1>
          <p className="mt-2 text-gray-500 text-sm md:text-base">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
      </div>

      <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between px-4 md:px-20 py-10">
        {/* Left Section */}
        <div className="flex-1 space-y-8">
          <div className="flex items-start space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-gray-600">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-600">Mobile: +(+84) 546-6789</p>
              <p className="text-gray-600">Hotline: +(+84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-clock-10"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 8 10" />
            </svg>
            <div>
              <h3 className="font-semibold text-lg">Working Time</h3>
              <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-white p-8">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Your Name
              </label>
              <Input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <Input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                Subject
              </label>
              <Input
                type="text"
                id="subject"
                placeholder="Subject of your message"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Write your message here"
                className="w-full border border-gray-300 p-2 rounded h-32"
              />
            </div>
            <Button
              type="submit"
              className="w-2/5 py-2 bg-[#B88E2F] text-white text-sm font-medium rounded-md hover:bg-[#B88E2F] focus:ring-0"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
      <hr className="w-full" />
      <div className="bg-white py-12 w-full px-4">
        <GoogleMaps />
      </div>
      <Footer />
    </div>
  );
}
