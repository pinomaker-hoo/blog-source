package observer;

public class Runner {
    public static void main(String[] args) {
        Publisher publisher = new Publisher();
        Observer subscriberA = new SubscriberA();
        Observer subscriberB = new SubscriberB();

        publisher.registerObserver(subscriberA);
        publisher.registerObserver(subscriberB);
        publisher.notifyObservers();
    }
}
