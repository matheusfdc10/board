"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface ConfirmeModalProps {
    children: React.ReactNode;
    onConfirm: () => void;
    disabled?: boolean;
    header: string;
    description?: string;
}

export const  ConfirmeModal: React.FC<ConfirmeModalProps> = ({
    children,
    header,
    onConfirm,
    description,
    disabled
}) => {
    const handleConfirm = () => {
        onConfirm();
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {header}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        disabled={disabled}
                        onClick={handleConfirm}
                    >
                        confirm
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}