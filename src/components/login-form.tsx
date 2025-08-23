"use client";
import { Card, CardContent } from "./ui/card";
import { Form, FormControl, FormField, FormItem } from "./ui/form";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/validators/login";
import { Checkbox } from "./ui/checkbox";

type LoginInput = {
  handleOrEmail: string;
  password: string;
  remember?: boolean;
};

const defaultValues = {
  handleOrEmail: "",
  password: "",
  remember: false,
};

export default function LoginForm() {
  const form = useForm<LoginInput>({
    defaultValues,
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: LoginInput) => {
    console.log("Form submitted with data:", data);
    // Handle form submission logic here, e.g., API call for login
  };

  return (
    <div className="">
      <Card className="border-[#767676] rounded-b">
        <div className="border-b-1 border-[#767676] pl-2 pt-1 text-[#3b5998] font-medium ">
          Login into Codeforces
        </div>

        <CardContent className="flex flex-col ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <FormField
                  control={form.control}
                  name="handleOrEmail"
                  render={({ field }) => (
                    <FormItem className="grid grid-cols-2 gap-6 pt-6">
                      <label className="text-right text-sm">Handle/Email</label>
                      <FormControl>
                        <input
                          {...field}
                          type="text"
                          className="border-1 border-[#767676]  outline-black px-2 text-sm"
                        ></input>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="grid grid-cols-2 gap-6">
                      <label className="text-right text-sm">Password</label>
                      <FormControl>
                        <input
                          {...field}
                          type="password"
                          className="border-1 border-[#767676] px-2 text-sm  outline-black"
                        ></input>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="remember"
                  render={({ field }) => (
                    <FormItem className="grid grid-cols-2 gap-4">
                      <div className="flex gap-2 col-start-2">
                        <FormControl className="">
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="border-[#767676]"
                          />
                        </FormControl>
                        <label className="text-xs">
                          Remember me for a month
                        </label>
                      </div>
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-3">
                  <button
                    type="submit"
                    className="col-start-2 border-1 px-3 py-1 text-sm  hover:bg-gray-100"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
        <div className="grid grid-cols-3 text-xs pt-1 pb-4">
          <a
            href="#"
            className="text-[#b25fa1] underline hover:text-[#b25fa1] col-start-3"
          >
            Forgot your password?
          </a>
        </div>
        <div className="flex justify-end text-xs border-t-1 border-[#767676] p-1 text-[#b25fa1] underline ">
          {/* bg-[#f5f5f5] */}
          <a
            href="#"
            className="text-[#b25fa1] underline hover:text-[#b25fa1] pl-2"
          >
            Use Gmail
          </a>
        </div>
      </Card>
    </div>
  );
}
