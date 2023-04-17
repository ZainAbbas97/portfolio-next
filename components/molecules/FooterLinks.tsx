import React from "react";
import { Section } from "../Page";
import Link from "next/link";
import { IconType } from "@/types/Icon.d";
import Icon from "@/components/atoms/Icon";

type Props = {
  heading?: any;
  specialUseCase?: string;
  footerLinks: {
    content: string;
    href: string;
    icon: IconType;
  }[];
};


const Logo = () => {
  return (
    <svg
      width="180"
      height="29"
      viewBox="0 0 180 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mb-10"
    >
      <path
        d="M13.9645 27.5097C13.588 27.886 12.9778 27.886 12.6013 27.5097L7.51437 22.4257C3.83455 18.7479 3.83455 12.7829 7.51437 9.1052V9.1052C11.2864 5.33534 17.4334 5.44738 21.0655 9.35218L25.7647 14.4042C26.1273 14.794 26.1049 15.4041 25.7145 15.7663V15.7663C25.3249 16.1278 24.7162 16.1053 24.3542 15.7162L19.6545 10.6639C16.7656 7.55839 11.8767 7.46934 8.87672 10.4676V10.4676C5.94975 13.3929 5.95001 18.1377 8.8773 21.0626L13.9644 26.1457C14.3412 26.5223 14.3413 27.1331 13.9645 27.5097V27.5097Z"
        fill="white"
      />
      <path
        d="M32.2687 22.3228C28.6488 25.9407 22.7819 25.9409 19.1617 22.3233L16.3678 19.5313C15.9909 19.1547 15.9909 18.5439 16.3677 18.1673V18.1673C16.7442 17.791 17.3544 17.791 17.7309 18.1672L20.5252 20.9595C23.3923 23.8245 28.0386 23.8246 30.9059 20.9597V20.9597C33.7763 18.0916 33.7763 13.439 30.9059 10.5709L25.7159 5.38502C25.3391 5.00845 25.339 4.39762 25.7159 4.02102V4.02102C26.0923 3.64476 26.7025 3.64476 27.079 4.02102L32.2687 9.2078C35.8918 12.8288 35.8918 18.7018 32.2687 22.3228V22.3228Z"
        fill="white"
      />
      <path
        d="M38.8362 27.503C38.4598 27.8792 37.843 27.8859 37.4665 27.5096V27.5096C37.0897 27.133 37.0964 26.5154 37.4733 26.1389V26.1389C43.1496 20.467 43.1496 11.0636 37.4733 5.39175V5.39175C37.0964 5.01519 37.0897 4.39762 37.4665 4.02102V4.02102C37.843 3.64476 38.4598 3.65138 38.8362 4.02764V4.02764C45.259 10.4467 45.259 21.0839 38.8362 27.503V27.503Z"
        fill="white"
      />
      <path
        d="M35.0461 2.92952C34.6695 2.55288 34.6695 1.94223 35.0461 1.5656V1.5656C35.4227 1.18896 36.0334 1.18896 36.41 1.5656L36.4314 1.58699C36.8081 1.96363 36.8081 2.57428 36.4314 2.95092V2.95092C36.0548 3.32756 35.4441 3.32756 35.0675 2.95092L35.0461 2.92952Z"
        fill="white"
      />
      <path
        d="M31.9231 26.1131C31.5464 25.7365 31.5464 25.1258 31.9231 24.7492V24.7492C32.2997 24.3726 32.9103 24.3726 33.287 24.7492L33.3084 24.7706C33.685 25.1472 33.685 25.7579 33.3084 26.1345V26.1345C32.9317 26.5112 32.3211 26.5111 31.9444 26.1345L31.9231 26.1131Z"
        fill="white"
      />
      <path
        d="M13.9047 16.8636C13.5281 16.487 13.5281 15.8763 13.9047 15.4997V15.4997C14.2814 15.123 14.892 15.123 15.2687 15.4997L15.2901 15.5211C15.6667 15.8977 15.6667 16.5084 15.2901 16.885V16.885C14.9134 17.2616 14.3028 17.2616 13.9261 16.885L13.9047 16.8636Z"
        fill="white"
      />
      <path
        d="M34.6859 23.7108C34.3092 23.3341 34.3092 22.7235 34.6859 22.3468V22.3468C35.0625 21.9702 35.6732 21.9702 36.0498 22.3468L36.0712 22.3682C36.4478 22.7449 36.4478 23.3555 36.0712 23.7322V23.7322C35.6946 24.1088 35.0839 24.1088 34.7073 23.7322L34.6859 23.7108Z"
        fill="white"
      />
      <path
        d="M61.5769 22.5405V20.6555L69.2551 8.51751H61.6689V6.44854H72.0827V8.3336L64.3815 20.4716H72.1516V22.5405H61.5769Z"
        fill="white"
      />
      <path
        d="M78.584 22.8164C77.6184 22.8164 76.8215 22.6555 76.1931 22.3336C75.5648 22.0118 75.0974 21.5903 74.7908 21.0693C74.4843 20.5329 74.3311 19.9505 74.3311 19.3221C74.3311 18.2187 74.7602 17.3451 75.6184 16.7014C76.4767 16.0578 77.7027 15.7359 79.2966 15.7359H82.2851V15.529C82.2851 14.6401 82.0399 13.9735 81.5495 13.529C81.0744 13.0846 80.4537 12.8623 79.6874 12.8623C79.0131 12.8623 78.423 13.0309 77.9173 13.3681C77.4269 13.6899 77.128 14.1727 77.0207 14.8164H74.5839C74.6606 13.9888 74.9364 13.2838 75.4115 12.7014C75.902 12.1037 76.515 11.6516 77.2506 11.3451C78.0016 11.0233 78.8215 10.8623 79.7104 10.8623C81.3043 10.8623 82.538 11.2838 83.4115 12.1267C84.2851 12.9543 84.7219 14.0884 84.7219 15.529V22.5405H82.6069L82.4001 20.5865C82.0782 21.2149 81.6108 21.7436 80.9978 22.1727C80.3847 22.6018 79.5801 22.8164 78.584 22.8164ZM79.0667 20.8394C79.7257 20.8394 80.2774 20.6861 80.7219 20.3796C81.1817 20.0578 81.5342 19.6363 81.7794 19.1152C82.0399 18.5942 82.2008 18.0195 82.2621 17.3911H79.5495C78.584 17.3911 77.8943 17.5597 77.4805 17.8968C77.082 18.234 76.8828 18.6555 76.8828 19.1612C76.8828 19.6823 77.0744 20.0961 77.4575 20.4026C77.856 20.6938 78.3924 20.8394 79.0667 20.8394Z"
        fill="white"
      />
      <path
        d="M88.9425 8.97728C88.4827 8.97728 88.0995 8.83935 87.793 8.56349C87.5018 8.2723 87.3562 7.91215 87.3562 7.48303C87.3562 7.05391 87.5018 6.70141 87.793 6.42555C88.0995 6.13436 88.4827 5.98877 88.9425 5.98877C89.4022 5.98877 89.7777 6.13436 90.0689 6.42555C90.3754 6.70141 90.5287 7.05391 90.5287 7.48303C90.5287 7.91215 90.3754 8.2723 90.0689 8.56349C89.7777 8.83935 89.4022 8.97728 88.9425 8.97728ZM87.7241 22.5405V11.1382H90.1608V22.5405H87.7241Z"
        fill="white"
      />
      <path
        d="M93.3776 22.5405V11.1382H95.5386L95.7225 13.1382C96.075 12.4332 96.5884 11.8815 97.2627 11.483C97.9524 11.0692 98.7416 10.8623 99.6305 10.8623C101.01 10.8623 102.09 11.2915 102.872 12.1497C103.669 13.0079 104.067 14.2876 104.067 15.9888V22.5405H101.654V16.2417C101.654 14.0348 100.749 12.9313 98.9409 12.9313C98.0366 12.9313 97.2857 13.2532 96.688 13.8968C96.1056 14.5405 95.8144 15.4601 95.8144 16.6555V22.5405H93.3776Z"
        fill="white"
      />
      <path
        d="M111.787 22.5405L117.718 6.44854H120.385L126.27 22.5405H123.695L122.316 18.6095H115.741L114.362 22.5405H111.787ZM116.43 16.6785H121.626L119.028 9.3451L116.43 16.6785Z"
        fill="white"
      />
      <path
        d="M134.836 22.8164C133.947 22.8164 133.157 22.6402 132.468 22.2877C131.793 21.9352 131.257 21.4371 130.859 20.7934L130.606 22.5405H128.422V5.98877H130.859V12.9083C131.226 12.3719 131.732 11.8968 132.376 11.483C133.019 11.0692 133.847 10.8623 134.859 10.8623C135.962 10.8623 136.935 11.1229 137.778 11.644C138.621 12.165 139.28 12.8777 139.755 13.7819C140.246 14.6861 140.491 15.7129 140.491 16.8624C140.491 18.0118 140.246 19.0386 139.755 19.9428C139.28 20.8317 138.621 21.5367 137.778 22.0578C136.935 22.5635 135.954 22.8164 134.836 22.8164ZM134.422 20.7015C135.464 20.7015 136.322 20.349 136.996 19.644C137.671 18.9237 138.008 17.9888 138.008 16.8394C138.008 16.0884 137.855 15.4217 137.548 14.8394C137.242 14.257 136.82 13.8049 136.284 13.483C135.747 13.1459 135.127 12.9773 134.422 12.9773C133.38 12.9773 132.521 13.3374 131.847 14.0578C131.188 14.7781 130.859 15.7053 130.859 16.8394C130.859 17.9888 131.188 18.9237 131.847 19.644C132.521 20.349 133.38 20.7015 134.422 20.7015Z"
        fill="white"
      />
      <path
        d="M149.54 22.8164C148.651 22.8164 147.862 22.6402 147.172 22.2877C146.498 21.9352 145.962 21.4371 145.563 20.7934L145.31 22.5405H143.126V5.98877H145.563V12.9083C145.931 12.3719 146.437 11.8968 147.08 11.483C147.724 11.0692 148.552 10.8623 149.563 10.8623C150.667 10.8623 151.64 11.1229 152.483 11.644C153.326 12.165 153.985 12.8777 154.46 13.7819C154.95 14.6861 155.195 15.7129 155.195 16.8624C155.195 18.0118 154.95 19.0386 154.46 19.9428C153.985 20.8317 153.326 21.5367 152.483 22.0578C151.64 22.5635 150.659 22.8164 149.54 22.8164ZM149.126 20.7015C150.168 20.7015 151.027 20.349 151.701 19.644C152.375 18.9237 152.713 17.9888 152.713 16.8394C152.713 16.0884 152.559 15.4217 152.253 14.8394C151.946 14.257 151.525 13.8049 150.988 13.483C150.452 13.1459 149.831 12.9773 149.126 12.9773C148.084 12.9773 147.226 13.3374 146.552 14.0578C145.893 14.7781 145.563 15.7053 145.563 16.8394C145.563 17.9888 145.893 18.9237 146.552 19.644C147.226 20.349 148.084 20.7015 149.126 20.7015Z"
        fill="white"
      />
      <path
        d="M161.693 22.8164C160.727 22.8164 159.931 22.6555 159.302 22.3336C158.674 22.0118 158.206 21.5903 157.9 21.0693C157.593 20.5329 157.44 19.9505 157.44 19.3221C157.44 18.2187 157.869 17.3451 158.727 16.7014C159.586 16.0578 160.812 15.7359 162.406 15.7359H165.394V15.529C165.394 14.6401 165.149 13.9735 164.659 13.529C164.183 13.0846 163.563 12.8623 162.796 12.8623C162.122 12.8623 161.532 13.0309 161.026 13.3681C160.536 13.6899 160.237 14.1727 160.13 14.8164H157.693C157.77 13.9888 158.045 13.2838 158.521 12.7014C159.011 12.1037 159.624 11.6516 160.36 11.3451C161.111 11.0233 161.931 10.8623 162.819 10.8623C164.413 10.8623 165.647 11.2838 166.521 12.1267C167.394 12.9543 167.831 14.0884 167.831 15.529V22.5405H165.716L165.509 20.5865C165.187 21.2149 164.72 21.7436 164.107 22.1727C163.494 22.6018 162.689 22.8164 161.693 22.8164ZM162.176 20.8394C162.835 20.8394 163.386 20.6861 163.831 20.3796C164.291 20.0578 164.643 19.6363 164.888 19.1152C165.149 18.5942 165.31 18.0195 165.371 17.3911H162.659C161.693 17.3911 161.003 17.5597 160.59 17.8968C160.191 18.234 159.992 18.6555 159.992 19.1612C159.992 19.6823 160.183 20.0961 160.567 20.4026C160.965 20.6938 161.501 20.8394 162.176 20.8394Z"
        fill="white"
      />
      <path
        d="M175.224 22.8164C173.783 22.8164 172.596 22.4639 171.661 21.7589C170.726 21.0539 170.189 20.1191 170.051 18.9543H172.511C172.634 19.4754 172.925 19.9275 173.385 20.3106C173.845 20.6785 174.45 20.8624 175.201 20.8624C175.937 20.8624 176.473 20.7091 176.81 20.4026C177.147 20.0961 177.316 19.7436 177.316 19.3451C177.316 18.7627 177.078 18.3719 176.603 18.1727C176.143 17.9581 175.5 17.7666 174.672 17.598C174.029 17.4601 173.385 17.2762 172.741 17.0463C172.113 16.8164 171.584 16.4945 171.155 16.0807C170.741 15.6516 170.534 15.0769 170.534 14.3566C170.534 13.3604 170.917 12.5328 171.684 11.8738C172.45 11.1995 173.523 10.8623 174.902 10.8623C176.174 10.8623 177.201 11.1689 177.983 11.7819C178.779 12.3949 179.247 13.2608 179.385 14.3796H177.04C176.963 13.8892 176.733 13.506 176.35 13.2302C175.983 12.9543 175.484 12.8164 174.856 12.8164C174.243 12.8164 173.768 12.9466 173.431 13.2072C173.094 13.4524 172.925 13.7742 172.925 14.1727C172.925 14.5712 173.155 14.8853 173.615 15.1152C174.09 15.3451 174.71 15.552 175.477 15.7359C176.243 15.9045 176.948 16.1037 177.592 16.3336C178.251 16.5482 178.779 16.87 179.178 17.2991C179.576 17.7283 179.776 18.3566 179.776 19.1842C179.791 20.2264 179.385 21.0923 178.557 21.7819C177.745 22.4716 176.634 22.8164 175.224 22.8164Z"
        fill="white"
      />
    </svg>
  );
};

const IconLink = () => {};
const FooterLinks = ({ heading, specialUseCase, footerLinks: data }: Props) => {
  if (specialUseCase === "logo") {
    return (
      <Section>
        <Logo />
        {data.map((linkText, index) => (
          <p className="mb-2 flex flex-row items-center">
            {linkText.icon && linkText.icon !== "none" && (
              <Icon
                name={linkText.icon}
                className= "w-5 h-5 mr-2"
              />
            )}
            {linkText.content}
          </p>
        ))}
      </Section>
    );
  }
  
  return (
    <Section>
      <h6 className="body-large  mb-8">{heading}</h6>
      {data.map((linkText, index) => (
        <Link
          key={index}
          href={linkText.href}
          className="mb-2 flex flex-row items-center hover:text-yellow"
        >
          {linkText.icon && linkText.icon !== "none" && (
            <Icon name={linkText.icon} className="w-5 h-5 mr-2" />
          )}
          {linkText.content}
        </Link>
      ))}
    </Section>
  );
};

export default FooterLinks;
