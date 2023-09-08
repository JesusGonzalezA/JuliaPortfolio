"use client";

import { useEffect, useId, useRef, useState } from "react";
import va from '@vercel/analytics';
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Hamburguer ({ links }) {
    const closeButtonRef = useRef(null);
    const dialogRef = useRef(null);
    const openButtonRef = useRef(null);
    const linksContainerRef = useRef(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
      if (isDialogOpen) {
        closeButtonRef.current.focus();
      } else {
        openButtonRef.current.focus();
      }
    }, [isDialogOpen])
    
    const openDialog = () => { 
        dialogRef.current?.showModal();
        setIsDialogOpen(true); 
    }
    const closeDialog = () => { 
        dialogRef.current?.close(); 
        setIsDialogOpen(false); 
    }

    const handleFocusTrap = (e) => {
        const lastLink = linksContainerRef?.current?.lastElementChild?.firstElementChild;
        const activeElement = document.activeElement;
        const shiftKey = e.shiftKey;

        if (!lastLink) {
            e.preventDefault();
        }

        if (activeElement === closeButtonRef?.current && shiftKey) {
            e.preventDefault();
            lastLink.focus();
        } else if (activeElement === lastLink && !shiftKey){
            e.preventDefault();
            closeButtonRef?.current?.focus();
        }
    }

    const handleDialogKeyDown = (e) => {
        if (e.key === "Tab") {
            handleFocusTrap(e);
        }
        else if (e.key === "Escape") {    
            e.preventDefault();
            closeDialog();
        }
    }

    const handleOnClickLink = (link) => {
        if (link.track) {
            va(link.trackId)
        }
    }

    return (
        <div className={styles.hamburguer}>
            <button ref={openButtonRef} onClick={openDialog} aria-label="Menu">
                Menu <FontAwesomeIcon icon={faBars} />
            </button>
            <dialog ref={dialogRef} className={styles.dialog} aria-modal="true" onKeyDown={handleDialogKeyDown}>
                    <div className={styles.dialogContainer}>
                        <div className={styles.dialogHeader}>
                            <button ref={closeButtonRef} onClick={closeDialog} aria-label="Close">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                        <div className={styles.dialogBody}>
                            <nav className={[styles.nav, styles.verticalNav].join(' ')}>
                                <ul ref={linksContainerRef}>
                                    {links.map((link) => (
                                        <li key={useId()}>
                                            <a href={link.src} target={link.target} onClick={() => handleOnClickLink(link)}>{link.value}</a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
            </dialog>
        </div>
    )
}