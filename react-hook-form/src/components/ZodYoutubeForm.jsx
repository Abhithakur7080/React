import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";
import { z } from "zod";

const schema = z.object({
  username: z.string().nonempty("Username is required"),
  email: z.string().nonempty("Email is required").email("Invalid email"),
  channel: z.string().nonempty("Channel is required"),
});

const ZodYouTubeForm = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
    },
    resolver: zodResolver(schema),
  });

  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Zod YouTube Form</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username")} />
          <p className="error">{errors.username?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" {...register("email")} />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" {...register("channel")} />
          <p className="error">{errors.channel?.message}</p>
        </div>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
export default ZodYouTubeForm