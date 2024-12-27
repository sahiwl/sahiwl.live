import { IconType } from "react-icons";
import { AiOutlineSpotify } from "react-icons/ai";
import { FaLetterboxd } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { ImLastfm } from "react-icons/im";
import { IoMailOutline } from "react-icons/io5";
import { PiRedditLogo } from "react-icons/pi";
import { RxDiscordLogo } from "react-icons/rx";
import { SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";

export type Link = {
    name: string,
    url: string,
    value: string,
    icon: IconType
}

export type Links = Link[];

export const allLinks :Links = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sahilkr04",   
        value: "@sahilkr04",
        icon: SlSocialLinkedin
    },
    {
        name: "mail",
        url: "mailto:work.saahilkr@gmail.com",
        value: "@work.saahilkr",
        icon: IoMailOutline

    },
    {
        name: "Discord",
        url: "https://discord.com/users/550329365444034561",
        value: "@prettymferman",
        icon: RxDiscordLogo
    },
    {
        name: "Reddit",
        url: "https://www.reddit.com/user/prowlerbynight",
        value: "@prowlerbynight",
                icon: PiRedditLogo

    },
    {
        name:"twitter",
        url: "http://twitter.com/sahilwithocd",
        value: "@sahilwithocd",
                icon: SlSocialTwitter

    },
    {
        name:"lastfm",
        url:"https://www.last.fm/user/redgy01",
        value:"@redgy01",
                icon: ImLastfm

    },
    {
        name:"github",
        url:"https://github.com/sahiwl",
        value:"@sahiwl",
                icon: FiGithub

    },
    {
        name:"spotify",
        url:"https://open.spotify.com/user/azwl4f0twg8pe1stploa9wlqp?si=50f9afb2eccb4f7f",
        value:"@clay",
                icon: AiOutlineSpotify

    },
    {
        name: "letterboxd",
        url:"https://letterboxd.com/saahilkr",
        value: "@saahilkr",
        icon: FaLetterboxd
    }
]