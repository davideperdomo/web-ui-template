"use client"
import { useState, useEffect } from "react";
import { User } from "../domain/User.entity";
import { MockUserRepository } from "../infrastructure/MockUser.repository";
import { GetUser } from "../application/GetUser.useCase";

const getUser = new GetUser(new MockUserRepository);

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await getUser.execute();
        setUser(fetchedUser);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  return { user, isLoading, error };
};
