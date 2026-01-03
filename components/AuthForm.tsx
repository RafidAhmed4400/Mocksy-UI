"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import FormField from "@/components/FormField"

import { Button } from "@/components/ui/button"
import { Card, CardFooter } from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import Link from "next/link"
import { useRouter } from "next/navigation"

/* -------------------- TYPES -------------------- */
type FormType = "sign-in" | "sign-up"

/* -------------------- SCHEMA -------------------- */
const authFormSchema = (type: FormType) =>
    z.object({
        name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
        email: z.string().email(),
        password: z.string().min(3),
    })

/* -------------------- COMPONENT -------------------- */
export default function AuthForm({ type }: { type: FormType }) {
    const router = useRouter() // ✅ correct
    const formSchema = authFormSchema(type)
    type FormValues = z.infer<typeof formSchema>

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    const isSignIn = type === "sign-in"

    const onSubmit = async (values: FormValues) => {
        try {
            if (type === "sign-up") {
                toast.success("Account Created Successfully. Please sign in.")
                router.push("/sign-in")
            } else {
                toast.success("Signed in Successfully.")
                router.push("/")
            }
        } catch (error: unknown) {
            console.error(error)
            toast.error(
                error instanceof Error
                    ? `There was an error: ${error.message}`
                    : "There was an unknown error"
            )
        }
    }

    return (
        <Card className="bg-transparent p-0 border-none shadow-none">
            <div className="flex flex-col gap-6 card py-12 px-10">
                <div className="flex flex-row gap-2 justify-center">
                    <img src="/logo.svg" alt="logo" height={50} width={45} />
                    <h2 className="text-primary-100">Mocksy</h2>
                </div>

                <h3 className="text-center">Practice Job interview with AI</h3>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full space-y-6 mt-4 form"
                    >
                        {!isSignIn && (
                            <FormField
                                control={form.control}
                                name="name"
                                label="Name"
                                placeholder="Your name"
                            />
                        )}

                        <FormField
                            control={form.control}
                            name="email"
                            label="Email"
                            placeholder="you@example.com"
                            type="email"
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            label="Password"
                            placeholder="••••••••"
                            type="password"
                        />

                        <CardFooter>
                            <Button type="submit" className="btn w-full">
                                {isSignIn ? "Sign-in" : "Create an Account"}
                            </Button>
                        </CardFooter>
                    </form>
                </Form>

                <p className="text-center">
                    {isSignIn ? "No account yet?" : "Have an account already?"}
                    <Link
                        href={!isSignIn ? "/sign-in" : "/sign-up"}
                        className="font-bold text-user-primary ml-1"
                    >
                        {!isSignIn ? "Sign in" : "Sign up"}
                    </Link>
                </p>
            </div>
        </Card>
    )
}
