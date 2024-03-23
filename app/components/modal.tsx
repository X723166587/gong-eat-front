'use client'

import {useRouter} from 'next/navigation'
import {motion, MotionValue} from "framer-motion";
import {Button} from "@/app/components/button";
import FrozenRouter from "@/app/components/frozen-router";
import {MouseEventHandler, useCallback, useRef} from "react";

export default function Modal({children}: { children: React.ReactNode }) {
    const overlay = useRef(null)
    const wrapper = useRef(null)
    const router = useRouter()

    const onDismiss = useCallback(() => {
        router.back()
    }, [router])

    const onClick: MouseEventHandler = useCallback((e) => {
        if (e.target === overlay.current || e.target === wrapper.current) {
            if (onDismiss) onDismiss()
        }
    }, [onDismiss, overlay, wrapper])

    const modal = {
        closed: {
            opacity: 0,
            "--tw-translate-y": "200px",
        },
        open: {
            opacity: 1,
            "--tw-translate-y": "0px",
        },
    }

    return (
        <motion.div ref={overlay} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                    className="absolute top-0 left-0 w-full bg-black bg-opacity-50 z-40 flex justify-center items-center"
                    onClick={onClick}>
            <motion.div ref={wrapper}
                        variants={modal}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        transition={{ease: [0.2, 0, 0, 1], duration: 0.45, }}
                        className="subtract-nav mt-12 transform relative rounded-4xl w-full bg-surfaceContainerHighContrast">
                    <Button icon={{iconName: "close"}} className="sticky mt-6 ml-8 top-28" onClick={() => {router.back()}}/>
                <FrozenRouter>{children}</FrozenRouter>
            </motion.div>
        </motion.div>
    )
}