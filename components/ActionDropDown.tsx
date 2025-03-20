'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
  
  
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { actionsDropdownItems } from "@/constants"
import { constructDownloadUrl } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Models } from "node-appwrite"
import { useState } from "react"
  

const ActionDropDown = ({ file }: { file: Models.Document }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [action, setAction] = useState<ActionType | null>(null)

    const renderDialogContent = () => {
        if(!action) return null

        const {label, value} = action;
        return (
            <DialogContent className="shad-dialog button">
                <DialogHeader className="flex flex-col gap-3">
                <DialogTitle className="text-center text-light-100">
                    {label}
                </DialogTitle>
                </DialogHeader>
            </DialogContent>
        )
    }

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <DropdownMenuTrigger className="shad-no-focus">
            <Image
                src="/assets/icons/dots.svg"
                alt="dots"
                width={34}
                height={34}
            />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel className="max-w-[200px] truncate">{file.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {actionsDropdownItems.map((actionItem) => (
                <DropdownMenuItem 
                    key={actionItem.value} 
                    className="shad-dropdown-item" 
                    onClick={() => {
                        setAction(actionItem);

                        if(["rename", "share", "delete", "details"].includes(
                            actionItem.value,
                            )
                        ) {
                            setIsModalOpen(true);
                        }    
                        }}
                >
                    {actionItem.value === "download" ? (<Link href={constructDownloadUrl(file.bucketFileId)} download={file.name} className="flex items-center gap-2">
                        <Image src={actionItem.icon} alt={actionItem.label} width={30} height={30} />
                        {actionItem.label}
                    </Link>) : (<div className="flex items-center gap-2">
                        <Image src={actionItem.icon} alt={actionItem.label} width={30} height={30} />
                        {actionItem.label}
                    </div>)
                }
                </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
        </DropdownMenu>

        {renderDialogContent()}
    </Dialog>

  )
}

export default ActionDropDown