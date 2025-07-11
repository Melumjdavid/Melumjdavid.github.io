import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "bootstrap/dist/css/bootstrap.min.css";

const ChatMeBackLogin = () => {
  return (
    <div className="bg-primary d-flex align-items-center justify-content-center vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-white mb-5 text-center">
            <h1 className="display-3 font-weight-bold">Chat Me Back</h1>
            <p className="lead">Connect with friends and the world around you on Chat Me Back.</p>
          </div>
          <div className="col-md-5">
            <Card className="p-4 shadow-lg">
              <CardContent>
                <form>
                  <div className="form-group">
                    <label>Email or Phone</label>
                    <Input type="text" className="form-control" placeholder="Enter email or phone" />
                  </div>
                  <div className="form-group mt-3">
                    <label>Password</label>
                    <Input type="password" className="form-control" placeholder="Enter password" />
                  </div>
                  <Button className="btn btn-primary btn-block mt-4 w-100">Log In</Button>
                  <div className="text-center mt-3">
                    <a href="#" className="text-primary">Forgotten password?</a>
                  </div>
                  <hr />
                  <div className="text-center">
                    <Button className="btn btn-success">Create New Account</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMeBackLogin;
