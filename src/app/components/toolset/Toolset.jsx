"use client";
import * as React from 'react';
import Image from 'next/image';
import styles from "./toolset.module.css";

export default function Toolset() {
    return (
        <>
            <h2>Tools</h2>
            <div>
                <ul className={styles.skillset}>
                    <li title="Canva">
                        <Image src="/assets/tools/canva.svg" width={75} height={75} alt="Canva" />
                    </li>
                    <li title="Customer alliance">
                        <Image src="/assets/tools/customer_alliance.png" width={75} height={75} alt="Customer alliance"  />
                    </li>
                    <li title="Google business">
                        <Image src="/assets/tools/google_business.png" width={75} height={75} alt="Google business" />
                    </li>
                    <li title="Hootsuite">
                        <Image src="/assets/tools/hootsuite.png" width={75} height={75} alt="Hootsuite" />
                    </li>
                    <li title="Mailchimp">
                        <Image src="/assets/tools/mailchimp.png" width={75} height={75} alt="Mailchimp" />
                    </li>
                    <li title="Meta Business">
                        <Image src="/assets/tools/meta.svg" width={75} height={75} alt="Meta Business" />
                    </li>
                    <li title="Adobe Premiere">
                        <Image src="/assets/tools/premiere.png" width={75} height={75} alt="Adobe Premiere" />
                    </li>
                    <li title="Reviewpro">
                        <Image src="/assets/tools/reviewpro.png" width={75} height={75} alt="Reviewpro" />
                    </li>
                    <li title="Wordpress">
                        <Image src="/assets/tools/wordpress.png" width={75} height={75} alt="Wordpress" />
                    </li>
                </ul>
            </div>
        </>
    );
}