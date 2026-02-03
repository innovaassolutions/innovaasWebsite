"use client";

import { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Flex,
  IconButton,
  Avatar,
  Icon,
  Spinner,
} from '@chakra-ui/react';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  id: string;
  testimonial_text: string;
  rating: number | null;
  customer_name: string;
  customer_title: string | null;
  customer_company: string | null;
  customer_photo_url: string | null;
  company_logo_url: string | null;
  themes: string[] | null;
}

const NOVACRM_API_URL = process.env.NEXT_PUBLIC_NOVACRM_API_URL || 'https://novacrm.innovaas.co';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const headingColor = useColorModeValue('#181f2a', '#fff');
  const bodyTextColor = useColorModeValue('#222', '#d1d5db');
  const cardBg = useColorModeValue('white', '#232b39');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const quoteColor = useColorModeValue('gray.300', 'gray.600');

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await fetch(`${NOVACRM_API_URL}/api/testimonials/public?limit=10`);
        if (response.ok) {
          const data = await response.json();
          setTestimonials(data.testimonials || []);
        }
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Loading state
  if (loading) {
    return null; // Don't show anything while loading
  }

  // 0 testimonials - hide the section entirely
  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];
  const hasMultiple = testimonials.length > 1;

  return (
    <Box maxW="1200px" mx="auto" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>
      <Heading
        as="h2"
        size="xl"
        mb={2}
        color={headingColor}
        fontWeight={900}
        fontFamily="Montserrat, Arial, sans-serif"
        textAlign="center"
      >
        What Our Clients Say
      </Heading>
      <Text fontSize="lg" color={bodyTextColor} textAlign="center" mb={10} maxW="700px" mx="auto">
        Real feedback from businesses we&apos;ve helped transform
      </Text>

      <Box position="relative" maxW="800px" mx="auto">
        {/* Navigation arrows - only show if multiple testimonials */}
        {hasMultiple && (
          <>
            <IconButton
              aria-label="Previous testimonial"
              icon={<FaChevronLeft />}
              position="absolute"
              left={{ base: -2, md: -16 }}
              top="50%"
              transform="translateY(-50%)"
              zIndex={2}
              onClick={prevTestimonial}
              variant="ghost"
              colorScheme="orange"
              size="lg"
              isRound
            />
            <IconButton
              aria-label="Next testimonial"
              icon={<FaChevronRight />}
              position="absolute"
              right={{ base: -2, md: -16 }}
              top="50%"
              transform="translateY(-50%)"
              zIndex={2}
              onClick={nextTestimonial}
              variant="ghost"
              colorScheme="orange"
              size="lg"
              isRound
            />
          </>
        )}

        {/* Testimonial Card */}
        <Box
          bg={cardBg}
          borderRadius="2xl"
          p={{ base: 6, md: 10 }}
          borderWidth="1px"
          borderColor={borderColor}
          boxShadow="xl"
          position="relative"
        >
          {/* Quote icon */}
          <Icon
            as={FaQuoteLeft}
            color={quoteColor}
            boxSize={10}
            position="absolute"
            top={6}
            left={6}
            opacity={0.5}
          />

          {/* Testimonial text */}
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color={bodyTextColor}
            fontStyle="italic"
            lineHeight="tall"
            pt={8}
            pb={6}
            px={{ base: 2, md: 6 }}
            textAlign="center"
          >
            &ldquo;{currentTestimonial.testimonial_text}&rdquo;
          </Text>

          {/* Rating */}
          {currentTestimonial.rating && (
            <Flex justify="center" mb={4}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon
                  key={star}
                  as={FaStar}
                  color={star <= currentTestimonial.rating! ? 'orange.400' : 'gray.300'}
                  boxSize={5}
                  mx={0.5}
                />
              ))}
            </Flex>
          )}

          {/* Customer info */}
          <Flex align="center" justify="center" direction="column">
            {currentTestimonial.customer_photo_url ? (
              <Avatar
                size="lg"
                src={currentTestimonial.customer_photo_url}
                name={currentTestimonial.customer_name}
                mb={3}
              />
            ) : (
              <Avatar
                size="lg"
                name={currentTestimonial.customer_name}
                bg="orange.500"
                color="white"
                mb={3}
              />
            )}
            <Text fontWeight="bold" color={headingColor} fontSize="lg">
              {currentTestimonial.customer_name}
            </Text>
            {(currentTestimonial.customer_title || currentTestimonial.customer_company) && (
              <Text color={bodyTextColor} fontSize="sm">
                {currentTestimonial.customer_title}
                {currentTestimonial.customer_title && currentTestimonial.customer_company && ' at '}
                {currentTestimonial.customer_company}
              </Text>
            )}
          </Flex>
        </Box>

        {/* Dots indicator - only show if multiple testimonials */}
        {hasMultiple && (
          <Flex justify="center" mt={6} gap={2}>
            {testimonials.map((_, index) => (
              <Box
                key={index}
                w={index === currentIndex ? 6 : 2}
                h={2}
                borderRadius="full"
                bg={index === currentIndex ? 'orange.500' : 'gray.300'}
                cursor="pointer"
                onClick={() => setCurrentIndex(index)}
                transition="all 0.2s"
              />
            ))}
          </Flex>
        )}
      </Box>
    </Box>
  );
}
