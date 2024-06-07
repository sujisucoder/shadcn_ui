import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full  flex flex-col justify-center items-center ">
      <TabsList className="grid  w-1/2     grid-cols-4">
        <TabsTrigger value="Indivitual">Indivitual</TabsTrigger>
        <TabsTrigger value="Corporate">Corporate</TabsTrigger>
        <TabsTrigger value="Partner">Partner</TabsTrigger>
        <TabsTrigger value="Collage">Collage</TabsTrigger>
      </TabsList>
      <TabsContent className=" w-full " value="Indivitual">
      <Card className="text-center">
          <CardHeader>
            <CardTitle>Indivitual</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
           
            </div>
            <div className="space-y-1">
       
            </div>
          </CardContent>
          <CardFooter>
         
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent className=" w-full " value="Corporate">
      <Card className="text-center">
          <CardHeader>
            <CardTitle>Corporate</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
           
            </div>
            <div className="space-y-1">
       
            </div>
          </CardContent>
          <CardFooter>
         
          </CardFooter>
        </Card>
      </TabsContent>
        
      <TabsContent className=" w-full " value="Partner">
      <Card className="text-center">
          <CardHeader>
            <CardTitle>Partner</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
           
            </div>
            <div className="space-y-1">
       
            </div>
          </CardContent>
          <CardFooter>
         
          </CardFooter>
        </Card>
       </TabsContent>

       <TabsContent className=" w-full " value="Collage">
       <Card className="text-center">
          <CardHeader>
            <CardTitle>Collage</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
           
            </div>
            <div className="space-y-1">
       
            </div>
          </CardContent>
          <CardFooter>
         
          </CardFooter>
        </Card>
       </TabsContent>
    </Tabs>
  )
}
