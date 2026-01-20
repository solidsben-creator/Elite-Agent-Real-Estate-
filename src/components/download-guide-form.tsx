'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Download } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  phone: z.string().min(10, {
    message: 'Please enter a valid phone number.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
});

export function DownloadGuideForm() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Lead Captured:', values); 
    
    // In a real app, you would now send this data to your CRM or email list.
    // For this prototype, we'll just trigger the download directly.
    const link = document.createElement('a');
    link.href = '/local-insider-guide.pdf'; // You will need to replace this with your actual file
    link.download = 'Elite-Agent-Local-Insider-Guide.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setOpen(false);
    form.reset();

    toast({
      title: 'Download Started!',
      description: "Your local insider guide is on its way.",
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant="secondary" className="bg-white/10 hover:bg-white/20 text-white">
          <Download className="mr-2" />
          Download My Local Insider Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-card text-card-foreground">
        <DialogHeader>
          <DialogTitle>Get Your Local Insider Guide</DialogTitle>
          <DialogDescription>
            Enter your details below to get instant access to curated local secrets.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input placeholder="(555) 555-5555" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              <Download className="mr-2" />
              Download Now
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
