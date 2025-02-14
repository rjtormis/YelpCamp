import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, DollarSign, MailQuestion, Tent } from "lucide-react";
import { Component } from "@/components/charts/area-chart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <Tabs defaultValue="overview" className="my-4">
        <TabsList className="ml">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="">
                <CardTitle className="text-xl flex justify-between">
                  <p>Total Campgrounds</p> <Tent />{" "}
                </CardTitle>
                <CardDescription>The total campgrounds that you have listed.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl">10</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="">
                <CardTitle className="text-xl flex justify-between">
                  <p>Active Reservations</p> <CheckCircle />{" "}
                </CardTitle>
                <CardDescription>The total number of current or upcoming bookings.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl">10</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="">
                <CardTitle className="text-xl flex justify-between">
                  <p>Monthly Revenue </p> <DollarSign />{" "}
                </CardTitle>
                <CardDescription>
                  The total revenue of the listed campgrounds except publicly avail campgrounds
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl">10</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="">
                <CardTitle className="text-xl flex justify-between">
                  <p>Pending Inquiries</p> <MailQuestion />{" "}
                </CardTitle>
                <CardDescription>The total number of pending messages.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl">10</p>
              </CardContent>
            </Card>
          </div>
          <div className="my-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2">
              <Component />
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    <p>Recent Bookings</p>
                  </CardTitle>
                  <CardDescription>You have made 265 bookings this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Booking Entry */}
                    <div className="flex items-center justify-between pb-4">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-gray-900">John Doe</p>
                          <p className="text-sm text-gray-600">Mountain View Campground</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Guests: 4</p>
                        <p className="text-sm text-gray-600">2025-02-01 to 2025-02-05</p>
                        <p className="text-sm font-semibold text-gray-900">₱400.00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="analytics">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default Dashboard;
