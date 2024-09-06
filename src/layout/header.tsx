import { HeaderMenu } from "@/components/global/header.menu"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Menu } from "lucide-react"
import { IMAGES } from "@/utils/image"

export const Header = () => {
    return (
        <div className="w-5/6 md:w-2/3 lg:w-2/3 grid grid-cols-2 pt-4 md:pt-8 lg:pt-8">
            <div className="flex justify-start items-center">
                <Image src={IMAGES.LOGO} width={100} height={100} className="hidden lg:block" alt="logo" />
                <Image src={IMAGES.LOGO} width={70} height={70} className="lg:hidden" alt="logo" />
            </div>
            <div className="lg:hidden flex justify-end items-center">
                <Menu />
            </div>
            <div className="hidden lg:flex justify-end items-center">
                <HeaderMenu />
                <Button variant="secondary" className="ml-4 mr-2">Đăng nhập</Button>
                <Button>
                    Khám phá <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}