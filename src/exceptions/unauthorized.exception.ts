import { UNAUTHORIZED } from "http-status";
import HttpException from "@exceptions/http.exception";

class UnauthorizedException extends HttpException {
  constructor(message: string) {
    super(message, UNAUTHORIZED);
  }
}

export default UnauthorizedException;
