import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, CustomMessages } from "@ioc:Adonis/Core/Validator";

export default class LoginValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({ trim: true }),
    password: schema.string({ trim: true })
  })

  public messages: CustomMessages = this.ctx.i18n.validatorMessages('validator.user')
}
