import styled from "styled-components";

const ContactPage = () => {
  return (
    <Wrapper>
      <div className="page-heading">
        <h2>যোগাযোগ করুন</h2>
        <p>আমাদের লোকেশন দেখুন অথবা নিচের ফর্মে বার্তা পাঠান</p>
      </div>

      <div className="map-box">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.591645334787!2d90.69173757477716!3d23.257942407504775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754fb9574cafbf5%3A0xc58b46afc6a0fdb0!2sBaburhat%20Bazar!5e0!3m2!1sen!2sbd!4v1785572882620!5m2!1sen!2sbd"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Baburhat Bazar Location"
        ></iframe>
      </div>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mbdnzvop"
            className="contact-inputs"
            method="POST"
          >
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              autoComplete="on"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              autoComplete="on"
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              cols="30"
              rows="10"
              autoComplete="off"
            ></textarea>

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .page-heading {
    margin-bottom: 3rem;

    h2 {
      font-size: 2.4rem;
      margin-bottom: 0.8rem;
    }

    p {
      color: gray;
      font-size: 1.5rem;
    }
  }

  .map-box {
    width: 100%;
    max-width: 150rem;
    margin: 0 auto;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 0.6rem 2rem rgba(0, 0, 0, 0.12);
    border: 1px solid rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 1rem 2.6rem rgba(0, 0, 0, 0.18);
    }

    iframe {
      width: 100%;
      height: 45rem;
      border: 0;
      display: block;
    }
  }

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;
      background-color: #fff;
      padding: 3rem 2.5rem;
      border-radius: 1rem;
      box-shadow: 0 0.6rem 2rem rgba(0, 0, 0, 0.08);

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 2.2rem;

        input,
        textarea {
          width: 100%;
          padding: 1.2rem 1.4rem;
          font-size: 1.5rem;
          border-radius: 0.6rem;
          border: 1px solid #d9d9d9;
          outline: none;
          transition:
            border-color 0.2s,
            box-shadow 0.2s;
          font-family: inherit;

          &:focus {
            border-color: ${({ theme }) => theme.colors.btn};
            box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.btn}22`};
          }
        }

        textarea {
          resize: vertical;
          min-height: 12rem;
        }

        input[type="submit"] {
          cursor: pointer;
          background-color: ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          font-weight: 600;
          padding: 1.2rem;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.97);
          }
        }
      }
    }
  }

  /* Tablet */
  @media (max-width: 900px) {
    .map-box iframe {
      height: 35rem;
    }
  }

  /* Mobile */
  @media (max-width: 600px) {
    .map-box iframe {
      height: 26rem;
    }

    .container .contact-form {
      padding: 2rem 1.5rem;
    }
  }
`;

export default ContactPage;
