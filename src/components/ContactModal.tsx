import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

interface ContactModalProps {
  children: React.ReactNode;
}

export function ContactModal({ children }: ContactModalProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedMessage = form.message.trim();

    if (!trimmedName) newErrors.name = "Name is required";
    else if (trimmedName.length > 100) newErrors.name = "Name must be under 100 characters";

    if (!trimmedEmail) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) newErrors.email = "Invalid email address";
    else if (trimmedEmail.length > 255) newErrors.email = "Email must be under 255 characters";

    if (!trimmedMessage) newErrors.message = "Message is required";
    else if (trimmedMessage.length > 1000) newErrors.message = "Message must be under 1000 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    setForm({ name: "", email: "", message: "" });
    setErrors({});
    setIsSubmitting(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Get in Touch</DialogTitle>
          <p className="text-sm text-muted-foreground">
            Have questions about our Ethiopian green coffee? We'd love to hear from you.
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5 mt-2">
          <div className="space-y-2">
            <Label htmlFor="contact-name">Name</Label>
            <Input
              id="contact-name"
              placeholder="Your full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-email">Email</Label>
            <Input
              id="contact-email"
              type="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-message">Message</Label>
            <Textarea
              id="contact-message"
              placeholder="Tell us about your coffee needs..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={errors.message ? "border-destructive" : ""}
            />
            <div className="flex justify-between">
              {errors.message ? (
                <p className="text-xs text-destructive">{errors.message}</p>
              ) : (
                <span />
              )}
              <p className="text-xs text-muted-foreground">{form.message.length}/1000</p>
            </div>
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-coffee hover:opacity-90">
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
