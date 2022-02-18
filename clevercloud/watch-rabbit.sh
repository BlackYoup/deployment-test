#!/usr/bin/env bash

main() {
  $(journalctl -u bas-deploy | grep 'com.rabbitmq.client.ShutdownSignalException: connection error' -q)

  if [[ "$?" -eq 0 ]]; then
    echo "RabbitMQ connection issue detected, let's reboot.."
    pkill -f -9 node
  fi
}

main "$@"
