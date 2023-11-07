'use client'
import { Badge, PlayButton, Card, Button, Progress } from '~/src'
import {
  ArrowsOutSimple,
  Bed,
  Heart,
  MapPinLine,
  Play,
  Rows,
  ShoppingCart,
  Shower,
  SkipBack,
  SkipForward,
  SpeakerHigh,
  Users,
} from 'phosphor-react'

const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2">
      <div className="flex flex-col gap-5 md:col-span-1">
        <Card
          className="max-w-xs overflow-hidden rounded-md"
          imgSrc="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
          imgSize="md">
          <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
            <Heart size={20} weight="bold" color="white" />
          </Card.Container>
          <Card.Container className="p-6">
            <Card.Container className="flex items-center justify-between">
              <Badge size="xs" colorType="light" color="gray">
                For Sale
              </Badge>
              <Card.Title>$9.99</Card.Title>
            </Card.Container>
            <Card.Container className="my-3">
              <Card.Title>Men Nike Shoe</Card.Title>
              <Card.Description>
                This can save time and effort, and it can also help to reduce the risk of errors.
              </Card.Description>
            </Card.Container>
            <Card.Container className="flex items-center justify-start gap-5">
              <Button size="sm" type="outlineGray">
                <span className="pr-2">
                  <ShoppingCart size={24} />
                </span>
                Add To Cart
              </Button>
            </Card.Container>
          </Card.Container>
        </Card>
        <Card
          className="max-w-xs overflow-hidden rounded-md"
          imgSrc="https://images.prismic.io/staticmania/cb1a34d1-50a8-4b9c-b5e2-020d1c67e993_product-3.avif?auto=compress,format"
          imgSize="md">
          <Card.Container className="space-y-3 p-6">
            <Card.Container>
              <Card.Title className="text-md font-semibold text-slate-700 md:text-xl">Keep design podcast</Card.Title>
              <Card.Description className="text-sm font-medium text-slate-500">By Static Mania</Card.Description>
            </Card.Container>
            <Card.Container className="flex items-center justify-between">
              <Card.Title className="text-xs font-medium text-slate-500">4:05</Card.Title>
              <Card.Title className="text-xs font-medium text-slate-500">10:05</Card.Title>
            </Card.Container>
            <Progress progress={45} color="info" rounded={true} />
            <Card.Container className="flex items-center justify-between">
              <Button type="text" circle={true}>
                <Rows size={20} color="#5E718D" weight="bold" />
              </Button>
              <Card.Container className="flex items-center justify-between py-2">
                <Button type="text" circle={true}>
                  <SkipBack size={24} color="#5E718D" weight="bold" />
                </Button>
                <PlayButton type="primary" circle={true} size="lg" icon={<Play size="21" />} />
                <Button type="text" circle={true}>
                  <SkipForward size={24} color="#5E718D" weight="bold" />
                </Button>
              </Card.Container>
              <Button type="text" circle={true}>
                <SpeakerHigh size={20} color="#5E718D" weight="bold" />
              </Button>
            </Card.Container>
          </Card.Container>
        </Card>
      </div>
      <div className="md:col-span-1">
        <Card
          className="max-w-xs overflow-hidden rounded-md"
          imgSrc="https://images.prismic.io/staticmania/56ae80e7-4d23-4bd9-a2f3-01bd6f923a8b_product-2.avif?auto=compress,format"
          imgSize="md">
          <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
            <Heart size={20} weight="bold" color="white" />
          </Card.Container>
          <Card.Container className="space-y-4 p-6">
            <Card.Title className="flex items-center gap-2 text-sm font-medium text-slate-500 md:text-base">
              <MapPinLine size={20} color="#5E718D" />
              <span>Garden Street,Ring Road</span>
            </Card.Title>
            <Card.Container className="flex items-center justify-between">
              <Card.Title className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <Bed size={20} color="#5E718D" />
                <span>3 Bed Room</span>
              </Card.Title>
              <Card.Title className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <Shower size={20} color="#5E718D" />
                <span>1 Bath</span>
              </Card.Title>
            </Card.Container>
            <Card.Container className="flex items-center justify-between">
              <Card.Title className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <ArrowsOutSimple size={20} color="#5E718D" />
                <span>1,032 sqft</span>
              </Card.Title>
              <Card.Title className="flex items-center gap-1 text-sm font-medium text-slate-500">
                <Users size={20} color="#5E718D" />
                <span>Family</span>
              </Card.Title>
            </Card.Container>
            <Card.Container className="my-3 flex items-center justify-between">
              <Button type="primary">Check Out</Button>
              <Card.Title className="text-lg font-semibold text-slate-700 md:text-2xl">$649,00</Card.Title>
            </Card.Container>
          </Card.Container>
        </Card>
      </div>
    </div>
  )
}

const ProductCardCode = `
"use client";
import { Badge,
Button,
Card,
PlayButton,
Progress } from "keep-react";
import {
  ArrowsOutSimple,
  Bed,
  Heart,
  MapPinLine,
  Play,
  Rows,
  ShoppingCart,
  Shower,
  SkipBack,
  SkipForward,
  SpeakerHigh,
  Users,
} from "phosphor-react";

export const CardComponent = () => {
  return (
    <>
      <Card
        className="max-w-xs overflow-hidden rounded-md"
        imgSrc="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
        imgSize="md"
      >
        <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="p-6">
          <Card.Container className="flex items-center justify-between">
            <Badge size="xs" colorType="light" color="gray">
              For Sale
            </Badge>
            <Card.Title>$9.99</Card.Title>
          </Card.Container>
          <Card.Container className="my-3">
            <Card.Title>Men Nike Shoe</Card.Title>
            <Card.Description>
              This can save time and effort, and it can also help to reduce the
              risk of errors.
            </Card.Description>
          </Card.Container>
          <Card.Container className="flex items-center justify-start gap-5">
            <Button size="sm" type="outlineGray">
              <span className="pr-2">
                <ShoppingCart size={24} />
              </span>
              Add To Cart
            </Button>
          </Card.Container>
        </Card.Container>
      </Card>
     
      <Card
        className="max-w-xs overflow-hidden rounded-md"
        imgSrc="https://images.prismic.io/staticmania/56ae80e7-4d23-4bd9-a2f3-01bd6f923a8b_product-2.avif?auto=compress,format"
        imgSize="md"
      >
        <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="space-y-4 p-6">
          <Card.Title className="flex items-center gap-2 text-sm md:text-base font-medium text-slate-500">
            <MapPinLine size={20} color="#5E718D" />
            <span>Garden Street,Ring Road</span>
          </Card.Title>
          <Card.Container className="flex items-center justify-between">
            <Card.Title className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <Bed size={20} color="#5E718D" />
              <span>3 Bed Room</span>
            </Card.Title>
            <Card.Title className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <Shower size={20} color="#5E718D" />
              <span>1 Bath</span>
            </Card.Title>
          </Card.Container>
          <Card.Container className="flex items-center justify-between">
            <Card.Title className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <ArrowsOutSimple size={20} color="#5E718D" />
              <span>1,032 sqft</span>
            </Card.Title>
            <Card.Title className="flex items-center gap-1 text-sm font-medium text-slate-500">
              <Users size={20} color="#5E718D" />
              <span>Family</span>
            </Card.Title>
          </Card.Container>
          <Card.Container className="my-3 flex items-center justify-between">
            <Button type="primary" customClass="md:block hidden">
              Check Out
            </Button>
            <Button type="primary" size="xs" customClass="md:hidden block">
              Check Out
            </Button>
            <Card.Title className="text-lg md:text-2xl font-semibold text-slate-700">
              $649,00
            </Card.Title>
          </Card.Container>
        </Card.Container>
      </Card>
      
      <Card
        className="max-w-xs overflow-hidden rounded-md"
        imgSrc="https://images.prismic.io/staticmania/cb1a34d1-50a8-4b9c-b5e2-020d1c67e993_product-3.avif?auto=compress,format"
        imgSize="md"
      >
        <Card.Container className="space-y-3 p-6">
          <Card.Container>
            <Card.Title className="text-md md:text-xl font-semibold text-slate-700">
              Keep design podcast
            </Card.Title>
            <Card.Description className="text-sm font-medium text-slate-500">
              By Static Mania
            </Card.Description>
          </Card.Container>
          <Card.Container className="flex items-center justify-between">
            <Card.Title className="text-xs font-medium text-slate-500">
              4:05
            </Card.Title>
            <Card.Title className="text-xs font-medium text-slate-500">
              10:05
            </Card.Title>
          </Card.Container>
          <Progress progress={45} color="info" rounded={true} />
          <Card.Container className="flex items-center justify-between">
            <Button type="text" circle={true}>
              <Rows size={20} color="#5E718D" />
            </Button>
            <Card.Container className="flex items-center justify-between py-2">
              <Button type="text" circle={true}>
                <SkipBack size={24} color="#5E718D" weight="bold" />
              </Button>
              <PlayButton
                type="primary"
                circle={true}
                size="lg"
                icon={<Play size="21" />}
              />
              <Button type="text" circle={true}>
                <SkipForward size={24} color="#5E718D" weight="bold" />
              </Button>
            </Card.Container>
            <Button type="text" circle={true}>
              <SpeakerHigh size={20} color="#5E718D" />
            </Button>
          </Card.Container>
        </Card.Container>
      </Card>
    </>
  );
};
`

export { ProductCard, ProductCardCode }
