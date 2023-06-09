import Head from "next/head"
import React from "react"
import type { FC } from "react"
import { Inter } from "next/font/google"
import Main from "@/layouts/Main"
import styled from "styled-components"
import axios from "@/config/axios"
import Link from "next/link"
import { MdOpenInNew } from "react-icons/md"
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai"
import Button from "@/components/Button"
import about from "@/lib/data/about"

const inter = Inter({ subsets: ["latin"] })

const Home = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Hieu Thanh | Developer</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <IntroSection>
                    <div className="w-full max-w-2xl px-4 py-40 m-auto text-center lg:py-48 text-color-text">
                        <h1 className="text-5xl sm:text-7xl">
                            <span className="font-light">I'm</span>{" "}
                            <span className="font-bold">Hieu Thanh</span>
                        </h1>
                        <h2 className="mt-4 text-lg opacity-90">
                            I'm build things for the{" "}
                            <span className="rounded-full bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] bg-clip-text font-bold text-transparent">
                                web
                            </span>
                        </h2>
                        <p className="mx-auto mt-8 text-sm opacity-80 sm:text-lg">
                            {about?.introduction}
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 pt-12">
                            <Button
                                href="mailto:hieuthahn@gmail.com"
                                variant="solid"
                                icon={<span>👋</span>}
                            >
                                Contact Me
                            </Button>
                            <Button
                                href="mailto:hieuthahn@gmail.com"
                                variant="outline"
                                icon={<span>💼</span>}
                            >
                                My Resume
                            </Button>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                        <svg
                            preserveAspectRatio="none"
                            width="1440"
                            height="74"
                            viewBox="0 0 1440 74"
                            className="w-full fill-color-subtle-background min-w-[600px] max-w-[unset]"
                            style={{ transition: "fill 350ms ease 0s" }}
                        >
                            <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
                        </svg>
                    </div>
                </IntroSection>

                {/* Skills section */}
                <section className="flex flex-col justify-center max-w-3xl px-4 py-12 mx-auto sm:flex-row">
                    <div className="mb-4 mr-20 font-bold text-left text-color-primary basis-0 sm:basis-24 sm:text-right">
                        SKILLS
                    </div>
                    <div className="grid justify-center flex-1 grid-cols-2 gap-6 md:grid-cols-4 sm:gap-10">
                        {Object.entries(about?.skills)
                            .reverse()
                            .map(([key, value], index) => {
                                return (
                                    <div key={index} className="">
                                        <div className="font-semibold">
                                            {key.toUpperCase()}
                                        </div>
                                        {value.map((item) => (
                                            <div
                                                key={item}
                                                className="opacity-80"
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                )
                            })}
                    </div>
                </section>

                {/* Experience section */}
                <section className="flex flex-col justify-center max-w-3xl px-4 py-12 mx-auto sm:flex-row">
                    <div className="mb-4 mr-20 font-bold text-left text-color-primary basis-0 sm:basis-24 sm:text-right">
                        EXPERIENCE
                    </div>
                    <div className="flex-1">
                        {about?.experience.map((item, index) => {
                            return (
                                <div
                                    className="flex justify-between flex-grow "
                                    key={index}
                                >
                                    <div className="font-semibold">
                                        <Link
                                            href={item?.website || "#"}
                                            target="_blank"
                                            className="block"
                                        >
                                            {item?.company}
                                        </Link>
                                        <span className="text-sm font-normal opacity-80">
                                            {item?.position}
                                        </span>
                                    </div>
                                    <div>{item?.time}</div>
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* Experience section */}
                <section className="flex flex-col justify-center max-w-3xl px-4 py-12 mx-auto sm:flex-row">
                    <div className="mb-4 mr-20 font-bold text-left text-color-primary basis-0 sm:basis-24 sm:text-right">
                        PERSONAL PROJECTS
                    </div>
                    <div className="flex-1">
                        {about?.projects.map((item, index) => {
                            return (
                                <div key={index} className="mb-3 space-y-2">
                                    <div className="flex justify-between font-semibold">
                                        <div>{item?.name}</div>
                                        <div className="flex space-x-2">
                                            <Link href={item?.website || "#"}>
                                                <MdOpenInNew size={18} />
                                            </Link>
                                            <Link href={item?.github || "#"}>
                                                <AiFillGithub size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="opacity-80">
                                        {item?.description}
                                    </div>
                                    <div className="flex space-x-3">
                                        {item?.technology?.map(
                                            (tech, index) => (
                                                <span
                                                    className="px-2 py-1 font-mono text-sm font-normal rounded-md opacity-70 bg-gray-500/30"
                                                    key={index}
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* Contact with me */}
                <div className="flex flex-col items-center justify-center gap-2 px-4 py-12">
                    <div className="text-xl font-bold text-color-gray-700">
                        Contact with me
                    </div>
                    <div className="flex gap-3">
                        <Button
                            className="hover:-translate-y-1 hover:opacity-100 ease-out duration-300 rounded-xl text-color-text bg-[#1DA1F2]"
                            href="#"
                            variant="solid"
                            icon={<AiOutlineTwitter />}
                        >
                            Twitter
                        </Button>
                        <Button
                            className="duration-300 ease-out hover:-translate-y-1 hover:opacity-100 bg-color-gray-400 rounded-xl text-color-text"
                            href="#"
                            variant="solid"
                            icon={<AiFillGithub />}
                        >
                            Github
                        </Button>
                        <Button
                            className="hover:-translate-y-1 hover:opacity-100 ease-out duration-300 rounded-xl text-color-text bg-[#0077B5]"
                            href="#"
                            variant="solid"
                            icon={<AiFillLinkedin />}
                        >
                            Linkedin
                        </Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const IntroSection = styled.section`
    position: relative;
    z-index: 3;
    background: linear-gradient(
        0deg,
        var(--color-homepage-dark),
        var(--color-homepage-light)
    );
    transition: --color-homepage-light 350ms linear 0s,
        --color-homepage-dark 350ms linear 0s;
    margin-top: -8.5rem;
`

Home.getLayout = (page: React.ReactNode) => <Main>{page}</Main>

export default Home
