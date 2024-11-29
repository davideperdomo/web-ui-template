"use client"
import { useState, useEffect } from "react";
import { User } from "../../../modules/user/domain/User.entity";
import { MockUserRepository } from "../../../modules/user/infrastructure/MockUser.repository";
import { GetUser } from "../../../modules/user/application/GetUser.useCase";

const getUser = new GetUser(new MockUserRepository);

/**
 * Using Custom Hook as the "Presentation Layer" which is responsible of 
 * comunication with the "Domain" 
 */
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
