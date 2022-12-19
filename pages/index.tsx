import Head from "next/head";
import Image from "next/image";
import style from "@styles/home.module.scss";

import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/components/Button";
import HomeMenuItem from "@/components/HomeMenuItem";
import Testimonial from "../src/components/Testmonial/index";

import { MutableRefObject } from "react";

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [menuActive, setMenuActive] = useState(true);

  const menus = [
    {
      title: "Access your files, anywhere",
      description:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
      image: "/assets/images/icon-access-anywhere.svg",
    },
    {
      title: "Security you can trust",
      description:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
      image: "/assets/images/icon-security.svg",
    },
    {
      title: "Real-time collaboration",
      description:
        "Securely share files and folders with friends, family and colleagues for live collaboration.No email attachments required.",
      image: "/assets/images/icon-collaboration.svg",
    },
    {
      title: "Store any type of file",
      description:
        "  Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
      image: "/assets/images/icon-any-file.svg",
    },
  ];

  const testimonials = [
    {
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      author: "Satish Patel",
      positionHeld: "Founder & CEO, Huddle",
      image: "/assets/images/profile-1.jpg",
    },
    {
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      author: "Bruce McKenzie",
      positionHeld: "Founder & CEO, Huddle",
      image: "/assets/images/profile-2.jpg",
    },
    {
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      author: "  Iva Boyd",
      positionHeld: "Founder & CEO, Huddle",
      image: "/assets/images/profile-3.jpg",
    },
  ];

  const hamburguerHandleClick = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {}, [menuActive]);

  return (
    <>
      <Head>
        <title>Fylo</title>
        <meta name="description" content="Fylo Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <header
        className={classNames(
          style.container,
          style.header,
          "d-flex justify-content-between"
        )}
      >
        <div className="d-flex justify-content-between">
          <Image
            src="/assets/images/logo.svg"
            className={style["header__logo"]}
            width={172}
            height={30}
            alt="Site Logo"
          />
          <FontAwesomeIcon
            className={style["header__hamburger"]}
            onClick={hamburguerHandleClick}
            icon={faBarsStaggered}
          />
        </div>

        <nav
          className={classNames(
            {
              [style["header__nav--active"]]: menuActive,
            },
            {
              [style["header__nav--not-active"]]: !menuActive,
            },
            style["header__nav"]
          )}
        >
          <ul className={style["header__ul"]}>
            <li>
              <a href=" ">Features</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">Sign In</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section
          className={classNames(
            style.container,
            "z-index-2 d-flex flex-column align-items-center justify-content-center"
          )}
        >
          <Image
            src="/assets/images/illustration-intro.png"
            alt="Grow Together"
            width={100}
            height={100}
            layout="responsive"
            objectFit="cover"
            className="image"
          />
          <h1 className="text-center w-60 mt-5">
            All your files in one secure location, accessible anywhere.
          </h1>

          <p className="text-center w-40 mt-4 font-1">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <Button className="mt-3" large={true}>
            Get Started
          </Button>
        </section>

        <div className={style["main__principal-content"]}>
          <section
            className={classNames(style.container, "margin-content z-index-3")}
          >
            <div className="row d-flex justify-content-center">
              {menus.map(
                (
                  menu: {
                    image: string;
                    title: string;
                    description: string;
                  },
                  index
                ) => {
                  return (
                    <div className="col-lg-5 mb-5" key={index}>
                      <HomeMenuItem
                        title={menu.title}
                        image={menu.image}
                        description={menu.description}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </section>

          <section className={style.container}>
            <div className="row gap-5 gap-lg-0">
              <div className="col-lg-6 d-flex justify-content-center ">
                <Image
                  src="/assets/images/illustration-stay-productive.png"
                  alt="Grow Together"
                  width={100}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                  className="image"
                />
              </div>
              <div className="col-lg-6 d-flex align-items-center ">
                <div>
                  <h1> Stay productive, wherever you are</h1>
                  <p>
                    Never let location be an issue when accessing your files.
                    Fylo has you covered for all of your file storage needs.
                  </p>
                  <p>
                    Securely share files and folders with friends, family and
                    colleagues for live collaboration. No email attachments
                    required.
                  </p>
                  <a className={style.link}> See how Fylo works</a>
                </div>
              </div>
            </div>
          </section>

          <section
            className={classNames(style.container, style["main__testimonials"])}
          >
            <div className="row d-flex justify-content-center">
              {testimonials.map(
                (
                  testimonial: {
                    image: string;
                    text: string;
                    author: string;
                    positionHeld: string;
                  },
                  index
                ) => {
                  return (
                    <div className="col-lg-4 mb-5" key={index}>
                      <Testimonial
                        author={testimonial.author}
                        image={testimonial.image}
                        positionHeld={testimonial.positionHeld}
                        text={testimonial.text}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </section>
        </div>
      </main>

      <footer className={classNames(style.footer)}>
        <div className={style["footer__form-content"]}>
          <h1 className="text-center"> Get early access today</h1>
          <p className="text-center mt-4">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>

          <div className="d-flex flex-column flex-xl-row mt-5">
            <input
              className={classNames(
                style["footer__input"],
                "flex-grow-1 mb-4 me-xl-4 mb-xl-0"
              )}
              type="email"
              placeholder="email@example.com"
              name="email"
              id="email"
            />
            <Button> Get Started For Free</Button>
          </div>
        </div>

        <div className={classNames(style.container, style["footer__items"])}>
          <div className="mb-5">
            <Image
              src="/assets/images/logo.svg"
              className={style["header__logo"]}
              width={172}
              height={30}
              alt="Site Logo"
            />
          </div>
          <div className="row gap-5 gap-lg-0">
            <div className="col-lg-4">
              <div className="d-flex align-items-center">
                <Image
                  src="/assets/images/icon-location.svg"
                  width={30}
                  height={30}
                  alt="Site Logo"
                  className="footer__location-icon"
                />
                <p className="ms-3 mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>

            <div className="col-lg-2 d-flex  flex-column ">
              <div className="d-flex gap-3 align-items-center">
                <Image
                  src="/assets/images/icon-phone.svg"
                  width={30}
                  height={30}
                  alt="HeadPhone Icon"
                />
                <p className="mb-0"> +1-543-123-4567</p>
              </div>

              <div className="mt-3 d-flex gap-3 align-items-center ">
                <Image
                  src="/assets/images/icon-email.svg"
                  width={30}
                  height={30}
                  alt="Email Icon"
                />
                <p className="word-break mb-0">example@fylo.com</p>
              </div>
            </div>

            <div className="col-lg-2 d-flex flex-column">
              <ul className="ps-0">
                <li>
                  <a href=""> About Us</a>
                </li>
                <li>
                  <a href="">Jobs</a>
                </li>
                <li>
                  <a href=""> Press</a>
                </li>
                <li>
                  <a href=""> Blog</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 d-flex flex-column">
              <ul className="ps-0">
                <li>
                  <a href=""> Contact Us</a>
                </li>
                <li>
                  <a href="">Terms</a>
                </li>
                <li>
                  <a href=""> Privacy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 d-flex gap-3">
              <div className={style.icon}>
                <FontAwesomeIcon className="icon" icon={faFacebook} />
              </div>
              <div className={style.icon}>
                <FontAwesomeIcon className="icon" icon={faInstagram} />
              </div>
              <div className={style.icon}>
                <FontAwesomeIcon className="icon" icon={faTwitter} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
