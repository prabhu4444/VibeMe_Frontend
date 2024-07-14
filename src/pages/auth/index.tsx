import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import background from "@/assets/background.jpeg"


function Auth() {
  const [email, setEmail ] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password, confirmPassword);
  }
  const handleRegister = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password, confirmPassword);
  }

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="h-[80vh] w-[80vw] bg-white shadow-2xl md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold md:text-6xl">
              Welcome to VibeMe
            </h1>
          </div>
          <p className="font-medium text-center">
            Fill in the details to get started with the app!
          </p>
          <div className="flex w-full items-center justify-center">
          <Tabs className="w-3/4">
            <TabsList className="bg-transparent w-full rounded-none">
              <TabsTrigger value="login" className="data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300 text-black border-b-2 w-full rounded-none">Login</TabsTrigger>
              <TabsTrigger value="register" className="data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300 text-black border-b-2 w-full rounded-none">Register</TabsTrigger>
            </TabsList>
            <TabsContent className="flex flex-col gap-5 mt-10" value="login">
            <div className="flex flex-col justify-center gap-2 ">
            <Label className="ml-2 text-purple-700" htmlFor="email">Email:</Label>
            <Input 
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl p-6"
            />
            </div>
            <div className="flex flex-col justify-center gap-2 ">
            <Label className="ml-2 text-purple-700" htmlFor="password">Password:</Label>
            <Input 
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-xl p-6"
            />
            </div>
            <Button className="rounded-xl p-6 bg-purple-700" onClick={handleLogin}>Login</Button>
            </TabsContent>
            <TabsContent className="flex flex-col gap-5 " value="register">
            <div className="flex flex-col justify-center gap-2 ">
            <Label className="ml-2 text-purple-700" htmlFor="email">Email:</Label>
            <Input 
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full p-6 w-xl"
            />
            </div>
            <div className="flex flex-col justify-center gap-2 ">
            <Label className="ml-2 text-purple-700" htmlFor="password">Password:</Label>
            <Input 
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-full p-6 w-xl"
            />
            </div>
            <div className="flex flex-col justify-center gap-2 ">
            <Label className="ml-2 text-purple-700" htmlFor="email">Confirm Password:</Label>
            <Input 
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="rounded-full p-6 w-xl"
            />
            </div>
            <Button className="rounded-xl p-6 bg-purple-700" onClick={handleRegister}>Register</Button>
            </TabsContent>
          </Tabs>
        </div>
        </div>
        <div className="hidden xl:flex justify-center items-center">
          <img src={background} alt="Background Image" className="h-[200px]" />
        </div>
      </div>
    </div>
  );
}

export default Auth;
