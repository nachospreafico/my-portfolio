const Contact = () => {
  return (
    <section id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#292929] mb-16">
        Contact
      </h1>
      <form
        action="https://getform.io/f/bb49ffe3-2ad0-41f7-8f17-97cc97351a96"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm py-2">
              Name
            </label>
            <input
              id="name"
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
              required
            ></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm py-2">
              Phone number
            </label>
            <input
              id="phone"
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
              required
            ></input>
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="email" className="text-sm py-2">
            Email
          </label>
          <input
            id="email"
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="email"
            required
            name="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="subject" className="text-sm py-2">
            Subject
          </label>
          <input
            id="subject"
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            required
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="message" className="text-sm py-2">
            Message
          </label>
          <textarea
            id="message"
            className="border-2 rounded-lg p-3 flex border-gray-300"
            required
            name="message"
            rows={5}
          ></textarea>
        </div>
        <button className="bg-[#292929] text-gray-100 w-full mt-4 p-4 rounded-lg lg:border-2 lg:border-white lg:hover:bg-white lg:hover:border-[#292929] lg:hover:text-[#292929]">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
