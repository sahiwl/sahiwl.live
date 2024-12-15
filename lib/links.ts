import { ReactElement } from "react";
import { IconType } from "react-icons";
import { AiOutlineSpotify } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { ImLastfm } from "react-icons/im";
import { PiRedditLogo } from "react-icons/pi";
import { RxDiscordLogo } from "react-icons/rx";
import { SlSocialTwitter } from "react-icons/sl";

export type Link = {
    name: string,
    url: string,
    value: string,
    icon: IconType
}

export type Links = Link[];

export const allLinks :Links = [
    {
        name: "Discord",
        url: "https://discord.com/users/550329365444034561",
        value: "@prettymferman",
        icon: RxDiscordLogo
    },
    {
        name: "Reddit",
        url: "https://www.reddit.com/user/Sahilkek1/",
        value: "@sahilkek1",
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
    
]